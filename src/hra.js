{
    "id": "f009e1ff-bce4-4fd7-90b1-fcf14af32227",
    "callFlowSchemaVersion": 2,
    "callEventHeaders": {
        "revel-target-platform": "rc2"
    },
    "contextAttributes": {},
    "masterSurveyId": "caa1f659-96a5-4521-be95-faa71a37869e",
    "name": "Medica HRA 2022",
    "voiceVendorType": "TWILIO",
    "memberInformationSource": "CHANNEL_SERVICE_INTERNAL",
    "voiceXmlSettings": {
        "answeringMachineDetectionSettings": {
            "finalSilenceInMilliseconds": 1500,
            "timeoutInMilliseconds": 3000,
            "maxTimeInMilliseconds": 30000
        },
        "inputInstructionSettings": [
            {
                "id": "SINGLE_SELECT",
                "confidenceLevel": 0.75,
                "sensitivity": 0.5,
                "speedVersusAccuracy": 0.5,
                "completeTimeoutInMilliseconds": 500,
                "incompleteTimeoutInMilliseconds": 4000,
                "maxSpeechTimeoutMilliseconds": 60000,
                "timeoutInMilliseconds": 4000,
                "interDigitTimeoutInMilliseconds": 0,
                "termTimeoutInMilliseconds": 0,
                "termMaxDigits": false
            },
            {
                "id": "FULL_DATE",
                "confidenceLevel": 0.65,
                "sensitivity": 0.5,
                "speedVersusAccuracy": 0.5,
                "completeTimeoutInMilliseconds": 500,
                "incompleteTimeoutInMilliseconds": 4000,
                "maxSpeechTimeoutMilliseconds": 60000,
                "timeoutInMilliseconds": 4000,
                "interDigitTimeoutInMilliseconds": 8000,
                "termTimeoutInMilliseconds": 4000,
                "termMaxDigits": true
            },
            {
                "id": "NUMBER",
                "confidenceLevel": 0.65,
                "sensitivity": 0.5,
                "speedVersusAccuracy": 0.5,
                "completeTimeoutInMilliseconds": 500,
                "incompleteTimeoutInMilliseconds": 4000,
                "maxSpeechTimeoutMilliseconds": 60000,
                "timeoutInMilliseconds": 4000,
                "interDigitTimeoutInMilliseconds": 4000,
                "termTimeoutInMilliseconds": 4000,
                "termMaxDigits": true
            },
            {
                "id": "PHONE_NUMBER",
                "confidenceLevel": 0.65,
                "sensitivity": 0.5,
                "speedVersusAccuracy": 0.5,
                "completeTimeoutInMilliseconds": 500,
                "incompleteTimeoutInMilliseconds": 4000,
                "maxSpeechTimeoutMilliseconds": 60000,
                "timeoutInMilliseconds": 4000,
                "interDigitTimeoutInMilliseconds": 4000,
                "termTimeoutInMilliseconds": 4000,
                "termMaxDigits": true
            }
        ]
    },
    "supportedLanguages": [
        "en-US"
    ],
    "supportedDispositions": [
        "CAREGIVER",
        "MEMBER"
    ],
    "supportedThemes": [
        "THEME_MAIN"
    ],
    "programId": "bf283f50-4ddf-49da-8f44-5655e8a2982f",
    "defaultManagedPhoneNumberId": "300f0a28-f8b1-41d5-a5b0-24474a997700",
    "managedPhoneNumbers": [
        {
            "id": "300f0a28-f8b1-41d5-a5b0-24474a997700",
            "phoneNumberE164": "+16126627665",
            "defaultInitialCallState": {
                "language": "en-US",
                "disposition": "MEMBER",
                "sex": "UNSPECIFIED",
                "theme": "THEME_MAIN"
            }
        },
        {
            "id": "fd3940e3-b55c-441f-8246-d116298f0a28",
            "phoneNumberE164": "+18557530698",
            "defaultInitialCallState": {
                "language": "en-US",
                "disposition": "MEMBER",
                "sex": "UNSPECIFIED",
                "theme": "THEME_MAIN"
            }
        }
    ],
    "tenantId": "5fdd0630c776b802c7b9d030",
    "outboundIntroInstructionId": "OUTBOUND-IDV-MEMBER",
    "inboundIntroInstructionId": "INBOUND-PREAMBLE",
    "unexpectedErrorInstructionId": "ERROR",
    "voiceMailInstructionId": "AMD-OFFRAMP-IDV-MEMBER",
    "outsideTransferWindowInstructionId": "OUTSIDE-WINDOW",
    "consecutiveNoInputFailureThreshold": 4,
    "transferHoursEnforced": false,
    "transferHoursTimeZone": "America/Chicago",
    "transferHoursInactiveDates": [],
    "transferHours": [],
    "callRecordingLevel": "ALL",
    "callRecordingPercentage": 0,
    "verifyAudioFilesExist": false,
    "instructions": [
        {
            "description": "Ask if the person on the phone is the member",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Hey, we are calling for",
                            "audioFile": "outboundPreamble.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "personalizationInformationType": "FULL_NAME",
                            "sayAs": "RAW",
                            "type": "PERSONALIZATION"
                        },
                        {
                            "text": "Is this",
                            "audioFile": "confirmName.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "personalizationInformationType": "FIRST_NAME",
                            "sayAs": "RAW",
                            "type": "PERSONALIZATION"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "BOTH",
                            "dispositions": [
                                "CAREGIVER",
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "hello",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "hello",
                                    "audioFile": "outboundPreamble.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FULL_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": "hello",
                                    "audioFile": "confirmName.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FIRST_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": "hello",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER",
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "hello",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "hello",
                                    "audioFile": "outboundPreamble.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FULL_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": "hello",
                                    "audioFile": "confirmName.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FIRST_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": "hello",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "IDV-MEMBER-NAME-YES",
                    "nextInstructionId": "STATEMENT-START",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "yes",
                                "one"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "IDV_OUTBOUND_NAME_YES",
                        "tags": [
                            "OUTBOUND_IDV_MEMBER_SUCCESS"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "IDV-MEMBER-NAME-NO",
                    "nextInstructionId": "OUTBOUND-IDV-CAREGIVER",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "no",
                                "three"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "IDV_OUTBOUND_NAME_NO",
                        "tags": [
                            "OUTBOUND-IDV-MEMBER_FAILURE"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "OUTBOUND-IDV-MEMBER",
                "tags": [
                    "OUTBOUND-IDV-MEMBER"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "OUTBOUND-IDV-MEMBER"
        },
        {
            "description": "AMD-OFFRAMP",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "vm_1.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "personalizationInformationType": "FULL_NAME",
                            "sayAs": "RAW",
                            "type": "PERSONALIZATION"
                        },
                        {
                            "text": "hello",
                            "audioFile": "confirmName.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "personalizationInformationType": "FIRST_NAME",
                            "sayAs": "RAW",
                            "type": "PERSONALIZATION"
                        },
                        {
                            "text": "hello",
                            "audioFile": "Yes_No_dtmf.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "text": "hello",
                            "audioFile": "silence3s.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "text": "hello",
                            "audioFile": "vm_2.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [],
            "nextInstructionId": "THE_END",
            "invalidInputInstructionId": "THE_END",
            "expectedResponses": [
                {
                    "id": "AMD-OFFRAMP-HUMAN-YES",
                    "nextInstructionId": "STATEMENT-START",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [],
                    "platformMetaData": {
                        "masterCatalogueId": "AMD-OFFRAMP-HUMAN-YES",
                        "tags": [
                            "AMD-OFFRAMP-HUMAN-YES"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "AMD-OFFRAMP-HUMAN-YES-IDV-NO",
                    "nextInstructionId": "OUTBOUND-IDV-CAREGIVER",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [],
                    "platformMetaData": {
                        "masterCatalogueId": "AMD-OFFRAMP-HUMAN-NO",
                        "tags": [
                            "AMD-OFFRAMP-HUMAN-NO"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "AMD-OFFRAMP",
                "tags": [
                    "AMD-OFFRAMP"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": true,
            "id": "AMD-OFFRAMP-IDV-MEMBER"
        },
        {
            "callUpdateType": "DISPOSITION",
            "description": "Ask if the person on the phone is the CAREGIVER, if so update the call so it receives the CAREGIVER instructionVariants.",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Are you a caregiver or family member with permission to speak for or about ",
                            "audioFile": "areYouCaregiver.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "personalizationInformationType": "FULL_NAME",
                            "sayAs": "RAW",
                            "type": "PERSONALIZATION"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "BOTH",
                            "dispositions": [
                                "CAREGIVER",
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "hello",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Are you a caregiver or family member with permission to speak for or about ",
                                    "audioFile": "areYouCaregiver.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FULL_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": "Press 1 for yes or press 3 for no.",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "BOTH",
                            "dispositions": [
                                "CAREGIVER",
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "hello",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Are you a caregiver or family member with permission to speak for or about ",
                                    "audioFile": "areYouCaregiver.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FULL_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": "Press 1 for yes or press 3 for no.",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "OUTBOUND-IDV-CAREGIVER-NAME-YES",
                    "nextInstructionId": "STATEMENT-START",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "yes",
                                "one"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "IDV_OUTBOUND_NAME_YES",
                        "tags": [
                            "OUTBOUND_IDV_CAREGIVER_SUCCESS"
                        ]
                    },
                    "callUpdateValue": "CAREGIVER"
                },
                {
                    "id": "OUTBOUND-IDV-CAREGIVER-NAME-NO",
                    "nextInstructionId": "IDV-FAILURE",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "no",
                                "three"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "IDV_OUTBOUND_NAME_NO",
                        "tags": [
                            "OUTBOUND_IDV_CAREGIVER_FAILURE"
                        ]
                    },
                    "callUpdateValue": "MEMBER"
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "OUTBOUND-IDV-MEMBER",
                "tags": [
                    "OUTBOUND-IDV-MEMBER"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "OUTBOUND-IDV-CAREGIVER"
        },
        {
            "description": "INBOUND-PREAMBLE",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "inbound preamble",
                            "audioFile": "inboundPreamble.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "INBOUND-IDV-MEMBER",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-PREAMBLE",
                "tags": [
                    "INBOUND-PREAMBLE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "INBOUND-PREAMBLE"
        },
        {
            "description": "INBOUND-IDV-MEMBER",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "To protect your privacy, we first need to verify who we are speaking with.",
                            "audioFile": "protectPrivacy.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "INBOUND-IDV-PHONE",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-MEMBER",
                "tags": [
                    "INBOUND-IDV-MEMBER"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "INBOUND-IDV-MEMBER"
        },
        {
            "description": "INBOUND IDV for a UNKNOWN number. Asking for phone number.",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "We do not recognize the number you are calling from. Please enter your 10-digit phone number we have on file for you with your keypad.",
                            "audioFile": "enterPhone.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [],
            "nextInstructionId": "INBOUND-IDV-DOB",
            "invalidInputInstructionId": "INBOUND-IDV-DOB",
            "voiceXmlInputInstructionSettingsId": "PHONE_NUMBER",
            "instructionType": "PHONE_NUMBER",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-PHONE",
                "tags": [
                    "INBOUND-IDV-PHONE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": true,
            "bargeable": true,
            "id": "INBOUND-IDV-PHONE"
        },
        {
            "description": "INBOUND IDV asking for DOB",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Please enter your birthdate and 4-digit birth year on your keypad. For example, if your birthdate is November 3, 1965, you would enter 11-03-1965.",
                            "audioFile": "enterBirthDate.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [],
            "nextInstructionId": "INBOUND-IDV-VERIFY",
            "invalidInputInstructionId": "INBOUND-IDV-FAIL",
            "voiceXmlInputInstructionSettingsId": "FULL_DATE",
            "instructionType": "FULL_DATE",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-DOB",
                "tags": [
                    "INBOUND-IDV-DOB"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": true,
            "id": "INBOUND-IDV-DOB"
        },
        {
            "answersToVerify": {
                "DATE_OF_BIRTH": "INBOUND-IDV-DOB",
                "PHONE_NUMBER": "INBOUND-IDV-PHONE"
            },
            "verifyIdentityFailedInstructionId": "INBOUND-IDV-FAIL",
            "verificationType": "MOST_RECENT",
            "verificationDataType": "PHONE_AND_DATE_OF_BIRTH",
            "description": "Verifying the phone number and birthdate entered. Will use CID number if the number is already recognized.",
            "nextInstructionId": "INBOUND-IDV-MEMBER-CONFIRM-NAME",
            "instructionType": "VERIFY_IDENTITY",
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-VERIFY",
                "tags": [
                    "INBOUND-IDV-VERIFY"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "INBOUND-IDV-VERIFY"
        },
        {
            "description": "Tell member what they entered and that it didn't match.",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Sorry, the phone number...",
                            "audioFile": "unknownPhone.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "text": "...does not match the birthdate.",
                            "audioFile": "unknownBirthDate.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "text": "...does not match our records. Let’s try again with your keypad.",
                            "audioFile": "doesNotMatchRecords.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "INBOUND-IDV-PHONE-RETRY",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-FAIL",
                "tags": [
                    "INBOUND-IDV-FAIL"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": true,
            "id": "INBOUND-IDV-FAIL"
        },
        {
            "description": "INBOUND IDV first retry for PH.",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Enter your 10-digit phone number with your keypad.",
                            "audioFile": "enterPhone_dtmf.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [],
            "nextInstructionId": "INBOUND-IDV-DOB-RETRY",
            "invalidInputInstructionId": "INBOUND-IDV-DOB-RETRY",
            "voiceXmlInputInstructionSettingsId": "PHONE_NUMBER",
            "instructionType": "PHONE_NUMBER",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-PHONE-RETRY",
                "tags": [
                    "INBOUND-IDV-PHONE-RETRY"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": true,
            "bargeable": true,
            "id": "INBOUND-IDV-PHONE-RETRY"
        },
        {
            "description": "INBOUND IDV, first retry date of birth.",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "DIGITS",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Please enter your birthdate and 4-digit birth year on your keypad. For example, if your birthdate is November 3, 1965, you would enter 11-03-1965.",
                            "audioFile": "enterBirthDate.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [],
            "nextInstructionId": "INBOUND-IDV-VERIFY-RETRY",
            "invalidInputInstructionId": "IDV-FAILURE",
            "voiceXmlInputInstructionSettingsId": "FULL_DATE",
            "instructionType": "FULL_DATE",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-DOB-RETRY",
                "tags": [
                    "INBOUND-IDV-DOB-RETRY"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": true,
            "id": "INBOUND-IDV-DOB-RETRY"
        },
        {
            "answersToVerify": {
                "DATE_OF_BIRTH": "INBOUND-IDV-DOB-RETRY",
                "PHONE_NUMBER": "INBOUND-IDV-PHONE-RETRY"
            },
            "verifyIdentityFailedInstructionId": "IDV-FAILURE",
            "verificationType": "MOST_RECENT",
            "verificationDataType": "PHONE_AND_DATE_OF_BIRTH",
            "description": "RETRY - Verifying the phone number and birthdate entered. Will use CID number if the number is already recognized.",
            "nextInstructionId": "INBOUND-IDV-MEMBER-CONFIRM-NAME",
            "instructionType": "VERIFY_IDENTITY",
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-VERIFY-RETRY",
                "tags": [
                    "INBOUND-IDV-VERIFY-RETRY"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "INBOUND-IDV-VERIFY-RETRY"
        },
        {
            "description": "Confirm name after entering birthdate",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "confirmName.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "personalizationInformationType": "FULL_NAME",
                            "sayAs": "RAW",
                            "type": "PERSONALIZATION"
                        },
                        {
                            "text": " If you are a caregiver or this is not your name, please say no",
                            "audioFile": "areYouCaregiverOrNotName.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "BOTH",
                            "dispositions": [
                                "CAREGIVER",
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "hello",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "hello",
                                    "audioFile": "confirmName.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FULL_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": " If you are a caregiver or this is not your name, please say no",
                                    "audioFile": "areYouCaregiverOrNotName.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "BOTH",
                            "dispositions": [
                                "CAREGIVER",
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "hello",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "hello",
                                    "audioFile": "confirmName.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FULL_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": " If you are a caregiver or this is not your name, please say no",
                                    "audioFile": "areYouCaregiverOrNotName.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "INBOUND-IDV-MEMBER-CONFIRM-NAME-YES",
                    "nextInstructionId": "STATEMENT-START",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "yes",
                                "one"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "INBOUND_IDV_NAME_YES",
                        "tags": [
                            "INBOUND_IDV_SUCCESS"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "INBOUND-IDV-MEMBER-CONFIRM-NAME-NO",
                    "nextInstructionId": "INBOUND-IDV-CAREGIVER-CONFIRM-NAME",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "2"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "no",
                                "two"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "INBOUND_IDV_NAME_NO",
                        "tags": [
                            "INBOUND_IDV_NAME_NO"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-MEMBER-CONFIRM-NAME",
                "tags": [
                    "INBOUND-IDV-MEMBER-CONFIRM-NAME"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "INBOUND-IDV-MEMBER-CONFIRM-NAME"
        },
        {
            "callUpdateType": "DISPOSITION",
            "description": "Ask if the person on the phone is the CAREGIVER, if so update the call so it receives the CAREGIVER instructionVariants.",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER",
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Are you a caregiver or family member with permission to speak for or about ",
                            "audioFile": "areYouCaregiver.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        },
                        {
                            "personalizationInformationType": "FULL_NAME",
                            "sayAs": "RAW",
                            "type": "PERSONALIZATION"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "BOTH",
                            "dispositions": [
                                "CAREGIVER",
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "hello",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Are you a caregiver or family member with permission to speak for or about ",
                                    "audioFile": "areYouCaregiver.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FULL_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": "Press 1 for yes or press 3 for no.",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "BOTH",
                            "dispositions": [
                                "CAREGIVER",
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "hello",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Are you a caregiver or family member with permission to speak for or about ",
                                    "audioFile": "areYouCaregiver.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "personalizationInformationType": "FULL_NAME",
                                    "sayAs": "RAW",
                                    "type": "PERSONALIZATION"
                                },
                                {
                                    "text": "Press 1 for yes or press 3 for no.",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "INBOUND-IDV-CAREGIVER-CONFIRM-NAME-YES",
                    "nextInstructionId": "STATEMENT-START",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "yes",
                                "one"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "IDV_INBOUND_CONFIRM_NAME_YES",
                        "tags": [
                            "INBOUND_IDV_CAREGIVER_SUCCESS"
                        ]
                    },
                    "callUpdateValue": "CAREGIVER"
                },
                {
                    "id": "INBOUND-IDV-CAREGIVER-CONFIRM-NAME-NO",
                    "nextInstructionId": "IDV-FAILURE",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "no",
                                "three"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "IDV_INBOUND_NAME_NO",
                        "tags": [
                            "INBOUND_IDV_CAREGIVER_FAILURE"
                        ]
                    },
                    "callUpdateValue": "MEMBER"
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "INBOUND-IDV-MEMBER",
                "tags": [
                    "INBOUND-IDV-MEMBER"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "INBOUND-IDV-CAREGIVER-CONFIRM-NAME"
        },
        {
            "description": "ERROR",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "error message",
                            "audioFile": "ERROR.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "error message",
                            "audioFile": "ERROR.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "ERROR",
                "tags": [
                    "ERROR"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "ERROR"
        },
        {
            "description": "IDV-FAILURE",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "I am sorry but I am having trouble verifying your identity. Please call us back.",
                            "audioFile": "idvFailure.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "I am sorry but I am having trouble verifying your identity. Please call us back.",
                            "audioFile": "idvFailure.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "IDV-FAILURE",
                "tags": [
                    "IDV-FAILURE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "IDV-FAILURE"
        },
        {
            "description": "STATEMENT-START",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Lets get started",
                            "audioFile": "EPreIntro.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Lets get started",
                            "audioFile": "CPreIntro.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "MAIN-ASK",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "STATEMENT-START",
                "tags": [
                    "STATEMENT-START"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "STATEMENT-START"
        },
        {
            "description": "MAIN-ASK",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have time now to answer these questions?",
                            "audioFile": "EINTRO.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have time now to answer these questions?",
                            "audioFile": "CINTRO.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have time now to answer these questions?",
                                    "audioFile": "EINTRO.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Press 1 for yes or 3 for no?",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have time now to answer these questions?",
                                    "audioFile": "CINTRO.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Press 1 for yes or 3 for no?",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have time now to answer these questions?",
                                    "audioFile": "EINTRO.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Press 1 for yes or 3 for no?",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have time now to answer these questions?",
                                    "audioFile": "CINTRO.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Press 1 for yes or 3 for no?",
                                    "audioFile": "Yes_No_dtmf.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "SURVEY-ASK-YES",
                    "nextInstructionId": "SURVEY-Q1",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "SURVEY-ASK-YES",
                        "tags": [
                            "SURVEY-ASK-YES"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "SURVEY-ASK-NO",
                    "nextInstructionId": "EXIT-NO",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "SURVEY-ASK-NO",
                        "tags": [
                            "SURVEY-ASK-NO"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "SURVEY-ASK",
                "tags": [
                    "SURVEY-ASK"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "MAIN-ASK"
        },
        {
            "description": "SURVEY-Q1",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "How would you describe your overall health?",
                            "audioFile": "EQ1.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "How would you describe your overall health?",
                            "audioFile": "CQ1.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How would you describe your overall health?",
                                    "audioFile": "EQ1b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How would you describe your overall health?",
                                    "audioFile": "CQ1b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How would you describe your overall health?",
                                    "audioFile": "EQ1b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How would you describe your overall health?",
                                    "audioFile": "CQ1b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q2A1",
                    "nextInstructionId": "SURVEY-Q2",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "5"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "five",
                                "excellent"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q2A1",
                        "tags": [
                            "Q2A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q2A2",
                    "nextInstructionId": "SURVEY-Q2",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "4"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "four",
                                "very"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q2A2",
                        "tags": [
                            "Q2A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q2A3",
                    "nextInstructionId": "SURVEY-Q2",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "good"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q2A3",
                        "tags": [
                            "Q2A3",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q2A4",
                    "nextInstructionId": "SURVEY-Q2",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "2"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "two",
                                "fair"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q2A4",
                        "tags": [
                            "Q2A4",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q2A5",
                    "nextInstructionId": "SURVEY-Q2",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "poor"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q2A5",
                        "tags": [
                            "Q2A5",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q2",
                "tags": [
                    "Q2"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q1"
        },
        {
            "description": "SURVEY-Q2",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have a primary care clinic or physician?",
                            "audioFile": "EQ2.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have a primary care clinic or physician?",
                            "audioFile": "CQ2.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have a primary care clinic or physician?",
                                    "audioFile": "EQ2b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have a primary care clinic or physician?",
                                    "audioFile": "CQ2b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have a primary care clinic or physician?",
                                    "audioFile": "EQ2b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have a primary care clinic or physician?",
                                    "audioFile": "CQ2b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q3A1",
                    "nextInstructionId": "SURVEY-Q3",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q3A1",
                        "tags": [
                            "Q3A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q3A2",
                    "nextInstructionId": "SURVEY-Q3",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q3A2",
                        "tags": [
                            "Q3A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q3",
                "tags": [
                    "Q3"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q2"
        },
        {
            "description": "SURVEY-Q3",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "In the past year, have you had a physical exam?",
                            "audioFile": "EQ3.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "In the past year, have you had a physical exam?",
                            "audioFile": "CQ3.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "In the past year, have you had a physical exam?",
                                    "audioFile": "EQ3b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "In the past year, have you had a physical exam?",
                                    "audioFile": "CQ3b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "In the past year, have you had a physical exam?",
                                    "audioFile": "EQ3b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "In the past year, have you had a physical exam?",
                                    "audioFile": "CQ3b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q4A1",
                    "nextInstructionId": "SURVEY-Q4",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q4A1",
                        "tags": [
                            "Q4A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q4A2",
                    "nextInstructionId": "SURVEY-Q4",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q4A2",
                        "tags": [
                            "Q4A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q4",
                "tags": [
                    "Q4"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q3"
        },
        {
            "description": "SURVEY-Q4",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Anxiety?",
                            "audioFile": "EQ4.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Anxiety?",
                            "audioFile": "CQ4.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Anxiety?",
                                    "audioFile": "EQ4b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Anxiety?",
                                    "audioFile": "CQ4b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Anxiety?",
                                    "audioFile": "EQ4b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Anxiety?",
                                    "audioFile": "CQ4b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A1",
                    "nextInstructionId": "SURVEY-Q5",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A1",
                        "tags": [
                            "Q1A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A2",
                    "nextInstructionId": "SURVEY-Q5",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A2",
                        "tags": [
                            "Q1A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q4"
        },
        {
            "description": "SURVEY-Q5",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Asthma?",
                            "audioFile": "EQ5.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Asthma?",
                            "audioFile": "CQ5.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Asthma?",
                                    "audioFile": "EQ5b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Asthma?",
                                    "audioFile": "CQ5b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Asthma?",
                                    "audioFile": "EQ5b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Asthma?",
                                    "audioFile": "CQ5b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A3",
                    "nextInstructionId": "SURVEY-Q6",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A3",
                        "tags": [
                            "Q1A3",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A4",
                    "nextInstructionId": "SURVEY-Q6",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A4",
                        "tags": [
                            "Q1A4",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q5"
        },
        {
            "description": "SURVEY-Q6",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Cancer?",
                            "audioFile": "EQ6.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Cancer?",
                            "audioFile": "CQ6.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Cancer?",
                                    "audioFile": "EQ6b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Cancer?",
                                    "audioFile": "CQ6b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Cancer?",
                                    "audioFile": "EQ6b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Cancer?",
                                    "audioFile": "CQ6b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A5",
                    "nextInstructionId": "SURVEY-Q7",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A5",
                        "tags": [
                            "Q1A5",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A6",
                    "nextInstructionId": "SURVEY-Q7",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A6",
                        "tags": [
                            "Q1A6",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q6"
        },
        {
            "description": "SURVEY-Q7",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Chronic pain?",
                            "audioFile": "EQ7.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Chronic pain?",
                            "audioFile": "CQ7.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Chronic pain?",
                                    "audioFile": "EQ7b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Chronic pain?",
                                    "audioFile": "CQ7b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Chronic pain?",
                                    "audioFile": "EQ7b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Chronic pain?",
                                    "audioFile": "CQ7b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A7",
                    "nextInstructionId": "SURVEY-Q8",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A7",
                        "tags": [
                            "Q1A7",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A8",
                    "nextInstructionId": "SURVEY-Q8",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A8",
                        "tags": [
                            "Q1A8",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q7"
        },
        {
            "description": "SURVEY-Q8",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Depression?",
                            "audioFile": "EQ8.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Depression?",
                            "audioFile": "CQ8.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Depression?",
                                    "audioFile": "EQ8b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Depression?",
                                    "audioFile": "CQ8b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Depression?",
                                    "audioFile": "EQ8b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Depression?",
                                    "audioFile": "CQ8b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A9",
                    "nextInstructionId": "SURVEY-Q9",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A9",
                        "tags": [
                            "Q1A9",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A10",
                    "nextInstructionId": "SURVEY-Q9",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A10",
                        "tags": [
                            "Q1A10",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q8"
        },
        {
            "description": "SURVEY-Q9",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Diabetes?",
                            "audioFile": "EQ9.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Diabetes?",
                            "audioFile": "CQ9.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Diabetes?",
                                    "audioFile": "EQ9b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Diabetes?",
                                    "audioFile": "CQ9b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Diabetes?",
                                    "audioFile": "EQ9b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Diabetes?",
                                    "audioFile": "CQ9b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A11",
                    "nextInstructionId": "SURVEY-Q10",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A11",
                        "tags": [
                            "Q1A11",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A12",
                    "nextInstructionId": "SURVEY-Q10",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A12",
                        "tags": [
                            "Q1A12",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q9"
        },
        {
            "description": "SURVEY-Q10",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Heart disease?",
                            "audioFile": "EQ10.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Heart disease?",
                            "audioFile": "CQ10.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Heart disease?",
                                    "audioFile": "EQ10b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Heart disease?",
                                    "audioFile": "CQ10b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Heart disease?",
                                    "audioFile": "EQ10b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Heart disease?",
                                    "audioFile": "CQ10b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A13",
                    "nextInstructionId": "SURVEY-Q11",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A13",
                        "tags": [
                            "Q1A13",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A14",
                    "nextInstructionId": "SURVEY-Q11",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A14",
                        "tags": [
                            "Q1A14",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q10"
        },
        {
            "description": "SURVEY-Q11",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Heart failure?",
                            "audioFile": "EQ11.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Heart failure?",
                            "audioFile": "CQ11.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Heart failure?",
                                    "audioFile": "EQ11b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Heart failure?",
                                    "audioFile": "CQ11b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Heart failure?",
                                    "audioFile": "EQ11b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Heart failure?",
                                    "audioFile": "CQ11b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A15",
                    "nextInstructionId": "SURVEY-Q12",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A15",
                        "tags": [
                            "Q1A15",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A16",
                    "nextInstructionId": "SURVEY-Q12",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A16",
                        "tags": [
                            "Q1A16",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q11"
        },
        {
            "description": "SURVEY-Q12",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have High blood pressure?",
                            "audioFile": "EQ12.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have High blood pressure?",
                            "audioFile": "CQ12.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have High blood pressure?",
                                    "audioFile": "EQ12b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have High blood pressure?",
                                    "audioFile": "CQ12b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have High blood pressure?",
                                    "audioFile": "EQ12b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have High blood pressure?",
                                    "audioFile": "CQ12b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A17",
                    "nextInstructionId": "SURVEY-Q13",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A17",
                        "tags": [
                            "Q1A17",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A18",
                    "nextInstructionId": "SURVEY-Q13",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A18",
                        "tags": [
                            "Q1A18",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q12"
        },
        {
            "description": "SURVEY-Q13",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have High cholesterol?",
                            "audioFile": "EQ13.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have High cholesterol?",
                            "audioFile": "CQ13.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have High cholesterol?",
                                    "audioFile": "EQ13b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have High cholesterol?",
                                    "audioFile": "CQ13b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have High cholesterol?",
                                    "audioFile": "EQ13b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have High cholesterol?",
                                    "audioFile": "CQ13b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A19",
                    "nextInstructionId": "SURVEY-Q14",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A19",
                        "tags": [
                            "Q1A19",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A20",
                    "nextInstructionId": "SURVEY-Q14",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A20",
                        "tags": [
                            "Q1A20",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q13"
        },
        {
            "description": "SURVEY-Q14",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Kidney disease?",
                            "audioFile": "EQ14.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Kidney disease?",
                            "audioFile": "CQ14.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Kidney disease?",
                                    "audioFile": "EQ14b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Kidney disease?",
                                    "audioFile": "CQ14b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Kidney disease?",
                                    "audioFile": "EQ14b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Kidney disease?",
                                    "audioFile": "CQ14b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A21",
                    "nextInstructionId": "SURVEY-Q15",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A21",
                        "tags": [
                            "Q1A21",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A22",
                    "nextInstructionId": "SURVEY-Q15",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A22",
                        "tags": [
                            "Q1A22",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q14"
        },
        {
            "description": "SURVEY-Q15",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Lower back pain?",
                            "audioFile": "EQ15.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Lower back pain?",
                            "audioFile": "CQ15.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Lower back pain?",
                                    "audioFile": "EQ15b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Lower back pain?",
                                    "audioFile": "CQ15b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Lower back pain?",
                                    "audioFile": "EQ15b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Lower back pain?",
                                    "audioFile": "CQ15b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A23",
                    "nextInstructionId": "SURVEY-Q16",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A23",
                        "tags": [
                            "Q1A23",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A24",
                    "nextInstructionId": "SURVEY-Q16",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A24",
                        "tags": [
                            "Q1A24",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q15"
        },
        {
            "description": "SURVEY-Q16",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Lung disease?",
                            "audioFile": "EQ16.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Lung disease?",
                            "audioFile": "CQ16.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Lung disease?",
                                    "audioFile": "EQ16b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Lung disease?",
                                    "audioFile": "CQ16b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Lung disease?",
                                    "audioFile": "EQ16b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Lung disease?",
                                    "audioFile": "CQ16b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A25",
                    "nextInstructionId": "SURVEY-Q17",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A25",
                        "tags": [
                            "Q1A25",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A26",
                    "nextInstructionId": "SURVEY-Q17",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A26",
                        "tags": [
                            "Q1A26",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q16"
        },
        {
            "description": "SURVEY-Q17",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Rheumatoid arthritis?",
                            "audioFile": "EQ17.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have Rheumatoid arthritis?",
                            "audioFile": "CQ17.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Rheumatoid arthritis?",
                                    "audioFile": "EQ17b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Rheumatoid arthritis?",
                                    "audioFile": "CQ17b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Rheumatoid arthritis?",
                                    "audioFile": "EQ17b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have Rheumatoid arthritis?",
                                    "audioFile": "CQ17b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A27",
                    "nextInstructionId": "SURVEY-Q18",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A27",
                        "tags": [
                            "Q1A27",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A28",
                    "nextInstructionId": "SURVEY-Q18",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A28",
                        "tags": [
                            "Q1A28",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q17"
        },
        {
            "description": "SURVEY-Q18",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have any other conditions?",
                            "audioFile": "EQ18.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have any other conditions?",
                            "audioFile": "CQ18.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have any other conditions?",
                                    "audioFile": "EQ18b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have any other conditions?",
                                    "audioFile": "CQ18b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have any other conditions?",
                                    "audioFile": "EQ18b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have any other conditions?",
                                    "audioFile": "CQ18b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q1A29",
                    "nextInstructionId": "SURVEY-Q19",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A29",
                        "tags": [
                            "Q1A29",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q1A30",
                    "nextInstructionId": "SURVEY-Q19",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q1A30",
                        "tags": [
                            "Q1A30",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q1",
                "tags": [
                    "Q1"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q18"
        },
        {
            "description": "SURVEY-Q19",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you had your blood pressure checked?",
                            "audioFile": "EQ19.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you had your blood pressure checked?",
                            "audioFile": "CQ19.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had your blood pressure checked?",
                                    "audioFile": "EQ19b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had your blood pressure checked?",
                                    "audioFile": "CQ19b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had your blood pressure checked?",
                                    "audioFile": "EQ19b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had your blood pressure checked?",
                                    "audioFile": "CQ19b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q5A1",
                    "nextInstructionId": "SURVEY-Q20",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q5A1",
                        "tags": [
                            "Q5A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q5A2",
                    "nextInstructionId": "SURVEY-Q20",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q5A2",
                        "tags": [
                            "Q5A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q5",
                "tags": [
                    "Q5"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q19"
        },
        {
            "description": "SURVEY-Q20",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you had a flu or pneumonia vaccine?",
                            "audioFile": "EQ20.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you had a flu or pneumonia vaccine?",
                            "audioFile": "CQ20.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a flu or pneumonia vaccine?",
                                    "audioFile": "EQ20b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a flu or pneumonia vaccine?",
                                    "audioFile": "CQ20b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a flu or pneumonia vaccine?",
                                    "audioFile": "EQ20b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a flu or pneumonia vaccine?",
                                    "audioFile": "CQ20b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q6A1",
                    "nextInstructionId": "SURVEY-Q21",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q6A1",
                        "tags": [
                            "Q6A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q6A2",
                    "nextInstructionId": "SURVEY-Q21",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q6A2",
                        "tags": [
                            "Q6A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q6",
                "tags": [
                    "Q6"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q20"
        },
        {
            "description": "SURVEY-Q21",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you had a colorectal cancer screening?",
                            "audioFile": "EQ21.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you had a colorectal cancer screening?",
                            "audioFile": "CQ21.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a colorectal cancer screening?",
                                    "audioFile": "EQ21b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a colorectal cancer screening?",
                                    "audioFile": "CQ21b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a colorectal cancer screening?",
                                    "audioFile": "EQ21b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a colorectal cancer screening?",
                                    "audioFile": "CQ21b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q7A1",
                    "nextInstructionId": "SURVEY-Q22",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q7A1",
                        "tags": [
                            "Q7A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q7A2",
                    "nextInstructionId": "SURVEY-Q22",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q7A2",
                        "tags": [
                            "Q7A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q7",
                "tags": [
                    "Q7"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q21"
        },
        {
            "description": "SURVEY-Q22",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "FEMALE"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you had a breast cancer screening or mammogram?",
                            "audioFile": "EQ22.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "FEMALE"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you had a breast cancer screening or mammogram?",
                            "audioFile": "CQ22.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "FEMALE"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a breast cancer screening or mammogram?",
                                    "audioFile": "EQ22b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "FEMALE"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a breast cancer screening or mammogram?",
                                    "audioFile": "CQ22b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "FEMALE"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a breast cancer screening or mammogram?",
                                    "audioFile": "EQ22b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "FEMALE"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you had a breast cancer screening or mammogram?",
                                    "audioFile": "CQ22b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "SURVEY-Q23",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q8A1",
                    "nextInstructionId": "SURVEY-Q23",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q8A1",
                        "tags": [
                            "Q8A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q8A2",
                    "nextInstructionId": "SURVEY-Q23",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q8A2",
                        "tags": [
                            "Q8A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [
                "MALE",
                "UNSPECIFIED"
            ],
            "platformMetaData": {
                "masterCatalogueId": "Q8",
                "tags": [
                    "Q8"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q22"
        },
        {
            "description": "SURVEY-Q23",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "How many prescription drugs do you use?",
                            "audioFile": "EQ23.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "How many prescription drugs do you use?",
                            "audioFile": "CQ23.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How many prescription drugs do you use?",
                                    "audioFile": "EQ23b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How many prescription drugs do you use?",
                                    "audioFile": "CQ23b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How many prescription drugs do you use?",
                                    "audioFile": "EQ23b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How many prescription drugs do you use?",
                                    "audioFile": "CQ23b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q9A1",
                    "nextInstructionId": "SURVEY-Q24",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "0"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "zero"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q9A1",
                        "tags": [
                            "Q9A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q9A2",
                    "nextInstructionId": "SURVEY-Q24",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "two",
                                "three"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q9A2",
                        "tags": [
                            "Q9A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q9A3",
                    "nextInstructionId": "SURVEY-Q24",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "2"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "four",
                                "five"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q9A3",
                        "tags": [
                            "Q9A3",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q9A4",
                    "nextInstructionId": "SURVEY-Q24",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "six",
                                "more"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q9A4",
                        "tags": [
                            "Q9A4",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q9",
                "tags": [
                    "Q9"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q23"
        },
        {
            "description": "SURVEY-Q24",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "How many times have you been hospitalized or visited an emergency room?",
                            "audioFile": "EQ24.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "How many times have you been hospitalized or visited an emergency room?",
                            "audioFile": "CQ24.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How many times have you been hospitalized or visited an emergency room?",
                                    "audioFile": "EQ24b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How many times have you been hospitalized or visited an emergency room?",
                                    "audioFile": "CQ24b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How many times have you been hospitalized or visited an emergency room?",
                                    "audioFile": "EQ24b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "How many times have you been hospitalized or visited an emergency room?",
                                    "audioFile": "CQ24b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q10A1",
                    "nextInstructionId": "SURVEY-Q25",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "0"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "zero"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q10A1",
                        "tags": [
                            "Q10A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q10A2",
                    "nextInstructionId": "SURVEY-Q25",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "two",
                                "three"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q10A2",
                        "tags": [
                            "Q10A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q10A3",
                    "nextInstructionId": "SURVEY-Q25",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "2"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "four",
                                "five"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q10A3",
                        "tags": [
                            "Q10A3",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q10A4",
                    "nextInstructionId": "SURVEY-Q25",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "six",
                                "more"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q10A4",
                        "tags": [
                            "Q10A4",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q10",
                "tags": [
                    "Q10"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q24"
        },
        {
            "description": "SURVEY-Q25",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Are you being treated for memory loss?",
                            "audioFile": "EQ25.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Are you being treated for memory loss?",
                            "audioFile": "CQ25.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Are you being treated for memory loss?",
                                    "audioFile": "EQ25b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Are you being treated for memory loss?",
                                    "audioFile": "CQ25b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Are you being treated for memory loss?",
                                    "audioFile": "EQ25b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Are you being treated for memory loss?",
                                    "audioFile": "CQ25b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q11A1",
                    "nextInstructionId": "SURVEY-Q26",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q11A1",
                        "tags": [
                            "Q11A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q11A2",
                    "nextInstructionId": "SURVEY-Q26",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q11A2",
                        "tags": [
                            "Q11A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q11",
                "tags": [
                    "Q11"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q25"
        },
        {
            "description": "SURVEY-Q26",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you need help with daily activities?",
                            "audioFile": "EQ26.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you need help with daily activities?",
                            "audioFile": "CQ26.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you need help with daily activities?",
                                    "audioFile": "EQ26b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you need help with daily activities?",
                                    "audioFile": "CQ26b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you need help with daily activities?",
                                    "audioFile": "EQ26b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you need help with daily activities?",
                                    "audioFile": "CQ26b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q12A1",
                    "nextInstructionId": "SURVEY-Q27",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q12A1",
                        "tags": [
                            "Q12A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q12A2",
                    "nextInstructionId": "SURVEY-Q28",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q12A2",
                        "tags": [
                            "Q12A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q12",
                "tags": [
                    "Q12"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q26"
        },
        {
            "description": "SURVEY-Q27",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Is a family member available to help you?",
                            "audioFile": "EQ27.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Is a family member available to help you?",
                            "audioFile": "CQ27.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Is a family member available to help you?",
                                    "audioFile": "EQ27b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Is a family member available to help you?",
                                    "audioFile": "CQ27b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Is a family member available to help you?",
                                    "audioFile": "EQ27b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Is a family member available to help you?",
                                    "audioFile": "CQ27b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q13A1",
                    "nextInstructionId": "SURVEY-Q28",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q13A1",
                        "tags": [
                            "Q13A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q13A2",
                    "nextInstructionId": "SURVEY-Q28",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q13A2",
                        "tags": [
                            "Q13A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q13",
                "tags": [
                    "Q13"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q27"
        },
        {
            "description": "SURVEY-Q28",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you needed care because of falling?",
                            "audioFile": "EQ28.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Have you needed care because of falling?",
                            "audioFile": "CQ28.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you needed care because of falling?",
                                    "audioFile": "EQ28b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you needed care because of falling?",
                                    "audioFile": "CQ28b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you needed care because of falling?",
                                    "audioFile": "EQ28b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Have you needed care because of falling?",
                                    "audioFile": "CQ28b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q14A1",
                    "nextInstructionId": "SURVEY-Q29",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q14A1",
                        "tags": [
                            "Q14A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q14A2",
                    "nextInstructionId": "SURVEY-Q29",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q14A2",
                        "tags": [
                            "Q14A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q14",
                "tags": [
                    "Q14"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q28"
        },
        {
            "description": "SURVEY-Q29",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Has anyone expressed concern about your use of alcohol or drugs?",
                            "audioFile": "EQ29.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Has anyone expressed concern about your use of alcohol or drugs?",
                            "audioFile": "CQ29.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Has anyone expressed concern about your use of alcohol or drugs?",
                                    "audioFile": "EQ29b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Has anyone expressed concern about your use of alcohol or drugs?",
                                    "audioFile": "CQ29b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Has anyone expressed concern about your use of alcohol or drugs?",
                                    "audioFile": "EQ29b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Has anyone expressed concern about your use of alcohol or drugs?",
                                    "audioFile": "CQ29b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q15A1",
                    "nextInstructionId": "SURVEY-Q30",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q15A1",
                        "tags": [
                            "Q15A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q15A2",
                    "nextInstructionId": "SURVEY-Q30",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q15A2",
                        "tags": [
                            "Q15A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q15",
                "tags": [
                    "Q15"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q29"
        },
        {
            "description": "SURVEY-Q30",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have an advance directive or living will?",
                            "audioFile": "EQ30.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "Do you have an advance directive or living will?",
                            "audioFile": "CQ30.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have an advance directive or living will?",
                                    "audioFile": "EQ30b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have an advance directive or living will?",
                                    "audioFile": "CQ30b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have an advance directive or living will?",
                                    "audioFile": "EQ30b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "MALE",
                                "FEMALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "THEME_MAIN",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "ERROR.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                },
                                {
                                    "text": "Do you have an advance directive or living will?",
                                    "audioFile": "CQ30b.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "FAILURE",
            "invalidInputInstructionId": "FAILURE",
            "expectedResponses": [
                {
                    "id": "Q16A1",
                    "nextInstructionId": "SURVEY-END",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "one",
                                "yes"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q16A1",
                        "tags": [
                            "Q16A1",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                },
                {
                    "id": "Q16A2",
                    "nextInstructionId": "SURVEY-END",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "3"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "three",
                                "no"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "Q16A2",
                        "tags": [
                            "Q16A2",
                            "Survey"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "SINGLE_SELECT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "Q16",
                "tags": [
                    "Q16"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "SURVEY-Q30"
        },
        {
            "description": "SURVEY-END",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "End of survey. Thank you.",
                            "audioFile": "ES5.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "CS5.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "SURVEY-END",
                "tags": [
                    "SURVEY-END"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "SURVEY-END"
        },
        {
            "description": "EXIT-NO",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "exit-no.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "exit-no.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "OPTOUT",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "EXIT-NO",
                "tags": [
                    "EXIT-NO"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "EXIT-NO"
        },
        {
            "optOutResponseId": "OPTOUTYES",
            "description": "OPTOUT",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "FEMALE",
                        "MALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Is this",
                            "audioFile": "opt-out-voice.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "BOTH",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "FEMALE",
                        "MALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "Is this",
                            "audioFile": "opt-out-voice.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "retryAttempts": [
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "FEMALE",
                                "MALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "optout_error1.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "FEMALE",
                                "MALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "optout_error1.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                },
                {
                    "bargeable": true,
                    "instructionVariants": [
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "MEMBER"
                            ],
                            "sexes": [
                                "FEMALE",
                                "MALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "optout_error1.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        },
                        {
                            "language": "en-US",
                            "utteranceType": "DIGITS",
                            "dispositions": [
                                "CAREGIVER"
                            ],
                            "sexes": [
                                "FEMALE",
                                "MALE",
                                "UNSPECIFIED"
                            ],
                            "theme": "*",
                            "prompts": [
                                {
                                    "text": "error",
                                    "audioFile": "optout_error1.wav",
                                    "sayAs": "RAW",
                                    "type": "AUDIO"
                                }
                            ]
                        }
                    ]
                }
            ],
            "nextInstructionId": "OPTOUT-FAILURE",
            "invalidInputInstructionId": "OPTOUT-FAILURE",
            "expectedResponses": [
                {
                    "id": "OPTOUTYES",
                    "nextInstructionId": "OPTOUT-CONFIRM",
                    "staticResponseType": "NONE",
                    "customDigitUtteranceSet": [
                        "1"
                    ],
                    "customVoiceUtteranceSet": [
                        {
                            "language": "en-US",
                            "utteranceSet": [
                                "yes",
                                "yeah",
                                "yup",
                                "yeh",
                                "one",
                                "1"
                            ]
                        }
                    ],
                    "platformMetaData": {
                        "masterCatalogueId": "OPTOUTYES",
                        "tags": [
                            "OPTOUTYES"
                        ]
                    },
                    "callUpdateValue": ""
                }
            ],
            "voiceXmlInputInstructionSettingsId": "SINGLE_SELECT",
            "instructionType": "OPT_OUT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "OPTOUT",
                "tags": []
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "bargeable": false,
            "id": "OPTOUT"
        },
        {
            "description": "OPTOUT-CONFIRM",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "FEMALE",
                        "MALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "You have successfully opt of of phone calls. ",
                            "audioFile": "optOut_voice.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "FEMALE",
                        "MALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "You have successfully opt of of phone calls. ",
                            "audioFile": "optOut_voice.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "OPTOUT-CONFIRM",
                "tags": [
                    "OPTOUT-CONFIRM"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "OPTOUT-CONFIRM"
        },
        {
            "description": "OPTOUT-FAILURE",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "FEMALE",
                        "MALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "You have not successfully opted of of phone calls. ",
                            "audioFile": "optout_error2.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "FEMALE",
                        "MALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "THEME_MAIN",
                    "prompts": [
                        {
                            "text": "You have not successfully opted of of phone calls. ",
                            "audioFile": "optout_error2.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "OPTOUT-FAILURE",
                "tags": [
                    "OPTOUT-FAILURE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "OPTOUT-FAILURE"
        },
        {
            "description": "FAILURE",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "failure.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "failure.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "FAILURE",
                "tags": [
                    "FAILURE"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "FAILURE"
        },
        {
            "description": "The last instruction",
            "nextInstructionId": "",
            "instructionType": "TERMINAL",
            "platformMetaData": {
                "masterCatalogueId": "THE_END",
                "tags": [
                    "you'reStillHere?",
                    "it'sOver",
                    "goHome...Go"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "THE_END"
        },
        {
            "description": "OUTSIDE-WINDOW",
            "instructionVariants": [
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "MEMBER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "OutsideWindow.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                },
                {
                    "language": "en-US",
                    "utteranceType": "NONE",
                    "dispositions": [
                        "CAREGIVER"
                    ],
                    "sexes": [
                        "MALE",
                        "FEMALE",
                        "UNSPECIFIED"
                    ],
                    "theme": "*",
                    "prompts": [
                        {
                            "text": "hello",
                            "audioFile": "OutsideWindow.wav",
                            "sayAs": "RAW",
                            "type": "AUDIO"
                        }
                    ]
                }
            ],
            "nextInstructionId": "THE_END",
            "instructionType": "STATEMENT",
            "skippedDispositions": [],
            "skippedSexes": [],
            "platformMetaData": {
                "masterCatalogueId": "OUTSIDE-WINDOW",
                "tags": [
                    "OUTSIDE-WINDOW"
                ]
            },
            "skipWhenMemberPhoneNumberRecognized": false,
            "id": "OUTSIDE-WINDOW"
        }
    ]
}