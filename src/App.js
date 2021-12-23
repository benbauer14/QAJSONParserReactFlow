import React, { useEffect, useState, useCallback } from "react";
import ReactFlow, {ReactFlowProvider, addEdge, removeElements, isNode} from "react-flow-renderer";
import parse from 'html-react-parser'
import dagre from 'dagre';

import "./styles.css";


import initialElements from "./elements";
// import cf from "./data"

let els = ''

const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  
  // In order to keep this example simple the node width and height are hardcoded.
  // In a real world app you would use the correct width and height values of
  // const nodes = useStoreState(state => state.nodes) and then node.__rf.width, node.__rf.height
  let keyArray = []
  let linkDataArray = []
  const nodeWidth = 150;
  const nodeHeight = 25;

  
  const getLayoutedElements = (elements, direction = 'TB') => {
    const isHorizontal = direction === 'LR';
    dagreGraph.setGraph({ rankdir: direction });

    elements.forEach((el) => {
      if (isNode(el)) {
        dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });
  
    dagre.layout(dagreGraph);
  
    return elements.map((el) => {
      if (isNode(el)) {
        const nodeWithPosition = dagreGraph.node(el.id);
        el.targetPosition = isHorizontal ? 'left' : 'top';
        el.sourcePosition = isHorizontal ? 'right' : 'bottom';
  
        // unfortunately we need this little hack to pass a slightly different position
        // to notify react flow about the change. Moreover we are shifting the dagre node position
        // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
        el.position = {
          x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
          y: nodeWithPosition.y - nodeHeight / 2,
        }; 
      }
  
      return el;
    });
  };
  
  const layoutedElements = getLayoutedElements(initialElements);

export default function App() {
  // const [elements, setElements] = useState();
  const [cf, setCF] = useState({})
  const [elements, setElements] = useState(layoutedElements);
  const [inspectElement, setInspectElement] = useState('')
  const [callFlowID, setCallFlowID] = useState('')



  const onConnect = (params) =>
    setElements((els) =>
      addEdge({ ...params, type: 'smoothstep', animated: true }, els)
    );

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLayout = useCallback(
    (direction) => {
      const layoutedElements = getLayoutedElements(elements, direction);
      setElements(layoutedElements);
    },[elements]
  );

  const onElementClick = (event, element) => nodeClick(element);

  const nodeClick = (element) =>{ 
    setInspectElement(element['data']['label'])
  }

  const createMasterKeyID = (callflow) => {
      let keys = Object.values(callflow["instructions"])
      let index = 0
      keyArray = []
      for(let i = 0; i<keys.length; i++){
          let newpair = {"id": index +'', "type": "default", "data": {"label": callflow["instructions"][i]["id"], "tags":callflow["instructions"][i]["platformMetaData"]["tags"], "masterCatalogueId": callflow["instructions"][i]["platformMetaData"]["masterCatalogueId"]   }, position: { x: 0, y: 0 }}
          keyArray = [...keyArray, newpair]
          index++
      }

  }

  
  function createLinkDataArray(callflow){
      for(let i = 0; i < keyArray.length; i++){
          if(callflow["instructions"][i]["expectedResponses"] === undefined){
              if(findMasterKeyID(callflow["instructions"][i]["nextInstructionId"]) !== undefined){
                  let masterKeyIndex = findMasterKeyID(callflow["instructions"][i]["nextInstructionId"])
                  let foundExisingLink = false
                  for(let k = 0; k < linkDataArray.length; k ++){
                    if(linkDataArray[k]["id"] === "e" + i + "-" + masterKeyIndex){
                      foundExisingLink = true
                    }
                  }
                  if(foundExisingLink === false){
                    if(masterKeyIndex !== i){
                      linkDataArray.push({id: 'e' + i + "-" + masterKeyIndex, source: i, target: masterKeyIndex, type: "default", animated: false })
                    }
                  }
              }
          }else{
              let expectedResponses = (callflow["instructions"][i]["expectedResponses"])
              for(let j =0; j < expectedResponses.length; j++ ){
                  let masterKeyIndex = findMasterKeyID(expectedResponses[j]["nextInstructionId"])
                  let foundExisingLink = false
                  for(let k = 0; k < linkDataArray.length; k ++){
                    if(linkDataArray[k]["id"] === "e" + i + "-" + masterKeyIndex){
                      linkDataArray[k]["label"] += " " + callflow["instructions"][i]["expectedResponses"][j]["id"]
                      foundExisingLink = true
                    }
                  }
                  if(foundExisingLink === false){
                    if(masterKeyIndex !== i){
                      linkDataArray.push({id: 'e' + i + "-" + masterKeyIndex, source: i, target: masterKeyIndex, type: "default", animated: false, label: callflow["instructions"][i]["expectedResponses"][j]["id"] })
                    }
                  }
              }
          }
      }
  }

  const onLoad = () => {
    // getCallFlow("f93215dc-ac12-432b-acfe-03e8824eb058") //Preventative
    getCallFlow("f009e1ff-bce4-4fd7-90b1-fcf14af32227") //HRA
  }
  
  function findMasterKeyID(keyLabel){
      //finds index in keyArray that contains the keyText
      //this function allows for the keys to be linked in the LinkDataArray
  
      for(let i = 0; i < keyArray.length; i++){
          if(keyArray[i]["data"]["label"]=== keyLabel){
              return i
          }
      }
  }
  
  const createElements = () => {

      // createLinkDataArray(callFlow)
      let graphLinksModel = []
      for(let i = 0; i<keyArray.length; i++){
          graphLinksModel.push(keyArray[i])
      }
      for(let j = 0; j<linkDataArray.length; j++){
          graphLinksModel.push(linkDataArray[j])
      }

      const layoutedElements = getLayoutedElements(graphLinksModel);
      console.log(layoutedElements)
      setElements(layoutedElements)
  }

  
    function playWav(wavefile){
      console.log("clicked")
      // var myAudio = new Audio('wavefile');
  
    }
    
  function waveVariants(key){
      //function returns all wave files for a specific survey key in an object with language as the key and wave filenames in an array displaying 
      //wav files in the order listed in the call flow
  
      let callflow = cf
      let instructionVariantArray = (callflow["instructions"][findMasterKeyID(key)]["instructionVariants"])
      let langWav = ""
      if(instructionVariantArray !== undefined){
          for(let i = 0; i < instructionVariantArray.length; i++){
              let lang = instructionVariantArray[i]["language"]
              //loop through all possible prompts in the flow and add all wav files
              let wavArray = []
              for(let j = 0; j < instructionVariantArray[i]["prompts"].length; j++ ){
                  if(instructionVariantArray[i]["prompts"][j]["audioFile"] !== undefined){
                    langWav += "<tr><td>" + lang + "</td><td>" + instructionVariantArray[i]["prompts"][j]["audioFile"] + "</td><td><button type=\"button\" class=\"btn btn-primary\" onclick={playWave()}>Click</button></td></tr>"
                  }
              }
          }
      }   
  
      return langWav
  }
  
  function answersByMasterCatalogID(){
      //returns an object with the available masterCatalogIDs and the available answers in an array
      let callflow = cf
      let answerArray = []

      let masterAnswers = ""
      let questionObject = {}
      //loop through all sections and find the masterCatalogueId
      for(let i = 0; i < callflow["instructions"].length; i++){
          if((callflow["instructions"][i]["expectedResponses"]) !== undefined){
            //extracts masterCatalogueId (Q1, Q2,...)
            let newQuestion = callflow["instructions"][i]["platformMetaData"]["masterCatalogueId"]
            let foundQuestion = false
            //evalute whether the masterCatalogueID exists in the masterAnswers array
            for(let j = 0; j < masterAnswers.length;j++){
              if(masterAnswers[j]["question"] === newQuestion){
                questionObject = masterAnswers[j]
                foundQuestion = true
              }
            }
            //if masterCatalogueID was not met, create the new object
            if(!foundQuestion){
              questionObject = {"question": newQuestion, "answers": []}
            }
            //pull the existing answers array from the object
            answerArray = questionObject["answers"]
            //loop through all expected responses in a section and extract all answers and add them to an array
              let answers = ""
              for(let j = 0; j < callflow["instructions"][i]["expectedResponses"].length; j++){
                  answerArray.push(callflow["instructions"][i]["expectedResponses"][j]["platformMetaData"]["masterCatalogueId"])
                  answers += callflow["instructions"][i]["expectedResponses"][j]["platformMetaData"]["masterCatalogueId"] + ", "
              }
            //if not found push the new object into the masterAnswer array
            if(!foundQuestion){

              masterAnswers += "<tr><td>" + newQuestion + "</td><td>" + answers.slice(0,-2) + "</td></tr>"
            }
          }
      }
      return masterAnswers
  }

  const questionFromNode = (node) =>{
    let callflow = cf
    let output = ""

    for(let i = 0; i < callflow["instructions"].length; i++){
      if((callflow["instructions"][i]["expectedResponses"]) !== undefined){
            //loop through all expected responses in a section and extract all answers and add them to an array
        for(let j = 0; j < callflow["instructions"][i]["expectedResponses"].length; j++){
          if(callflow["instructions"][i]["expectedResponses"][j]["nextInstructionId"] === node){
            let tags = ""
            for(let k=0; k<callflow["instructions"][i]["expectedResponses"][j]["platformMetaData"]["tags"].length; k++){
              tags += callflow["instructions"][i]["expectedResponses"][j]["platformMetaData"]["tags"][k] + ", "
            }
            console.log(callflow["instructions"][i]["expectedResponses"][j]["id"])
            output += "<tr><td>" + callflow["instructions"][i]["id"] + "</td><td>" + callflow["instructions"][i]["expectedResponses"][j]["id"] + "</td><td>" + tags.slice(0, -2) + "</td></tr>"
          }
        }
      }
    }
    return output
  }

  const findTag = (tag) => {
    
    //searches the callflow for a specific tag

    let callflow = cf
    let found = false
    for(let i = 0; i < callflow["instructions"].length; i++){
      if((callflow["instructions"][i]["expectedResponses"]) !== undefined){
            //loop through all expected responses in a section and extract all answers and add them to an array
        for(let j = 0; j < callflow["instructions"][i]["expectedResponses"].length; j++){
            for(let k=0; k<callflow["instructions"][i]["expectedResponses"][j]["platformMetaData"]["tags"].length; k++){
              if(callflow["instructions"][i]["expectedResponses"][j]["platformMetaData"]["tags"][k] === tag){
                return "<tr><td>" + tag + "</td><td>✔</td></tr>" 
              }
            }
            
          }
        }
      }
    return "<tr><td>" + tag + "</td><td>❌</td></tr>" 
  }

  const nodeInfo = () => {
    if(inspectElement === ""){
      return ("")
    }else{
      return(
      <>
      <h3>{inspectElement}</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Question</th>
            <th scope="col">masterCatalogueId</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          { parse(questionFromNode(inspectElement)) }
        </tbody>
      </table>
      <br/>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Language</th>
            <th scope="col">File Name</th>
            <th scope="col">Play</th>
          </tr>
        </thead>
        <tbody>
          {parse(waveVariants(inspectElement))}
        </tbody>
      </table>


      </>)
    }
  }

  const surveyInfo = () => {
    if(cf["instructions"] === undefined){
      console.log("blank")
      return ("")
    }else{
      console.log(cf)
      return(
      <>
      <h3>Survey Info</h3>
      <table class="table table-striped" >
        <thead>
          <tr>
            <th scope="col">Question</th>
            <th scope="col">AnswerID</th>
          </tr>
        </thead>
        <tbody>
          {parse(answersByMasterCatalogID())}
        </tbody>
      </table>
      <br/>
      <h3>Error Checks</h3>
      <table class="table table-striped" style={{width: "25vw" }}>
        <thead>
          <tr>
            <th scope="col">Tags</th>
            <th scope="col">Found?</th>
          </tr>
        </thead>
        <tbody>
        {parse(findTag("WillGet"))}
        {parse(findTag("NoGet"))}
        {parse(findTag("HaveIt"))}
        {parse(findTag("WillChange"))}
        {parse(findTag("NoChange"))}
        </tbody>
      </table>


      </>)
    }
  }

  const getCallFlow = (callflow) => {
    fetch('https://api.revel-health.com/channel-service/voice/callflow/'+callflow)
      .then(res => res.json())
      .then((result) => {
          setCF(result)
          createMasterKeyID(result)
          createLinkDataArray(result)
          createElements();
        
      })
  }

  useEffect(() => {onLoad()}, []);


  return (
    <>
    <header>
      <input type="text" class="form-control" placeholder={"Call Flow ID"} onChange={(event) => setCallFlowID(event.target.value)}></input>
      <button type="button" class="btn btn-primary btn-sm" onClick={()=> getCallFlow(callFlowID)}>Load Call Flow</button>
      <div class="btn-group btn-group-sm" role="group">
            <button type="button" class="btn btn-primary" onClick={() => onLayout('TB')}>vertical layout</button>
            <button type="button" class="btn btn-primary" onClick={() => onLayout('LR')}>horizontal layout</button>
      </div>
    </header>
    <div className="parent">
      <div style={{ height: "75vh", width: "75vw" }} className="App">
      <ReactFlowProvider>
        <ReactFlow 
          elements={elements} 
          onElementClick={onElementClick}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          connectionLineType="smoothstep"
          />
      </ReactFlowProvider>
      </div>
      <div className="nodeInfo" style={{ height: "75vh", width: "20vw"}}>
        {(nodeInfo())}
        
      </div>
    </div>
    <footer>
      <div className="surveyInfo" style={{ width: "50vw"}}>
      {(surveyInfo())}
      </div>
    </footer>
    </>
  );
}
