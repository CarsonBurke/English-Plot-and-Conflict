

export interface SlideChild {
    title: string
    /**
     * Rich text expansion on the title
     */
     texts?: string[]
    image?: string
    align: 'center' | 'left' | 'right'
    theme?: 'glassBlack' | 'glassWhite'
}

export interface SlideType {

    slideChildren: SlideChild[]
    BGImage: string
}

export const slides: SlideType[] = [
    {
        BGImage: require('./images/restaurant.jpg'),
        slideChildren: [
            {
                title: 'Plot and Conflict',
                texts: [
                    `Featuring "The Guest" By Lord Dunsany`,
                    `CONTENT WARNING: discussion of suicide`,
                    `Built using Carson Slides™`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/dictionary.png'),
        slideChildren: [
            {
                title: 'Defining Plot and Conflict',
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Plot',
                texts: [
                    `Significant events of the story`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Conflict',
                texts: [
                    `Struggle between protagonist and antagonist`,
                    `Often idealogical contrast`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
        ],
    },
    {
        BGImage: require('./images/plotDiagram.png'),
        slideChildren: [
            {
                title: 'Plot of The Guest',
                align: 'center',
                theme: 'glassBlack',
            },
            {
                title: 'Plot Summary',
                texts: [
                    `Introduction and coffee`,
                    `Dialogue on death`,
                    `Reveal and the end`,
                ],
                align: 'center',
                theme: 'glassBlack',
            },
        ]
    },
    {
        BGImage: require('./images/conflict.png'),
        slideChildren: [
            {
                title: 'Conflict',
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Internal conflict',
                texts: [
                    `Deliberation on suicide`,
                    ],
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'External conflict',
                texts: [
                    `Rejected by a girl`,
                    ],
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/coffee.jpg'),
        slideChildren: [
            {
                title: 'Plot and Conflict: In Depth',
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Protagonist - Young Man',
                texts: [
                    `Working up to ask his favour`,
                    `Rejected by a girl`,
                    `Invited Guest instead`
                    ],
                image: require('./images/youngMan.png'),
                align: 'left',
                theme: 'glassWhite',
            },
            {
                title: 'Antagonist 1 - The Guest',
                texts: [
                    `Ominous person`,
                    `Revealed as protagonist speaks`,
                    `Exposed by the end`,
                ],
                image: require('./images/guest.png'),
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Antagonist 2 - Himself',
                texts: [
                    `Sadness from rejection`,
                    `Suicidal thoughts`,
                ],
                image: require('./images/youngMan.png'),
                align: 'right',
                theme: 'glassWhite',
            },
            {
                title: 'Suspense - Anxiety over Conflict',
                texts: [
                    `"You probably won't see him till the coffee comes" (355)`,
                    `Who is the guest?`,
                    `Exentuated by protagonist's monologue`
                ],
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Dilemma - Making difficult choices',
                texts: [
                    `"Well, you probably want to be going. I haven't taken you too much out of your way" (356)`,
                    `Postponing his decision`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Ending',
                texts: [
                    `Suicide, The Guest reveal`,
                    `Deterministic?`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Artistic Unity',
                texts: [
                    `There is strong artistic unity`,
                    `So short because everything is relevant`,
                    `We'll explain later`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
        ],
    },
    {
        BGImage: require('./images/analysis.jpg'),
        slideChildren: [
            {
                title: 'Analysis',
                align: 'center',
                theme: 'glassBlack',
            },
            {
                title: 'Artistic Unity',
                texts: [
                    `Every part furthers the plot`,
                    `Consistency - starts and ends with coffee`,
                ],
                align: 'center',
                theme: 'glassBlack',
            },
            {
                title: 'Irony',
                texts: [
                    `History-inept would experience situational irony`,
                    `Irony for those who miss the conflict`
                ],
                align: 'center',
                theme: 'glassBlack',
            },
            {
                title: 'Symbol',
                texts: [
                    `The Guest - Death`,
                    `Protagonist - suicide victim`,
                    `Love interest - suicide instigator`,
                ],
                align: 'center',
                theme: 'glassBlack',
            },
            {
                title: 'Setting / Atmosphere',
                texts: [
                    `London, fancy restaurant, pre WW1`,
                    `We expect a date, get a suicide`,
                ],
                align: 'center',
                theme: 'glassBlack',
            },
        ]
    },
    {
        BGImage: require('./images/restaurant.png'),
        slideChildren: [
            {
                title: 'Conclusion',
                texts: [
                    `Can learn about plot and conflict from "The Guest"`,
                    `Multisectional requirements to interpret`,
                    `Other elements enhance plot and conflict`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    }
/*     
    {
        BGImage: require('./images/society.png'),
        slideChildren: [
            {
                title: 'Greek Philosophy and Literature',
                texts: [
                    `By Carson Burke`,
                ],
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/literature.png'),
        slideChildren: [
            {
                title: 'Greek Literature',
                texts: [`Literature was a mainstay of ancient Greek culture, especially in schools and the upper classes`],
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Homer',
                texts: [
                    `Most famous Greek author`,
                    `Wrote many epics`,
                    `The Iliad and Odyssey poems explore events of the Trojan War`
                ],
                image: require('./images/homer.png'),
                align: 'right',
                theme: 'glassWhite',
            },
            {
                title: 'Hesiod',
                texts: [
                    `Works and Days explored the life of a Greek peasant`,
                    `Theogany described the origin of Greek gods and the universe`
                ],
                image: require('./images/hesiod.png'),
                align: 'left',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/socrates.png'),
        slideChildren: [
            {
                title: 'Greek Philosophers',
                texts: [
                    `Philosophy flourished in ancient Greece`,
                    'Socrates, Plato, and Aristotle were the most notable',
                    `Includes science, ethics, religion, knowledge, purpose, genesis and much more`
                ],
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Socrates',
                texts: [
                    `Created the Socratic Method and Socratic Irony`,
                    `Very interested in ethics`,
                    `Thought a good spirit motivated human action`,
                    `Believed evil was the consequence of ignorance`,
                    `Was killed for his agnosticism and questioning of gods`,
                ],
                image: require('./images/socratesPFP.png'),
                align: 'left',
                theme: 'glassWhite',
            },
            {
                title: 'Plato',
                texts: [
                `Student of Socrates, documented his work`,
                `Wrote the first book on political science`,
                `Prescribed that philosophers should be kings`,
                `Tutor to Alexander the Great`,
],
                image: require('./images/plato.png'),
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Aristotle',
                texts: [
                    `Student of Plato`,
                    `Very interested in biology and science`,
                    `Created the logical syllogism, still used to date`,
                    `Established fallacies`,
                    `Added the "try to prove your theory wrong" part to the scientific method`
                ],
                image: require('./images/aristotle.png'),
                align: 'right',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/philosphy.jpg'),
        slideChildren: [
            {
                title: 'Greek Philosophical Concepts',
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Socratic Method',
                texts: [
                    `Expose inconsistent arguments and ignorance through a series of targetted questions`
                ],
                image: require('./images/why.png'),
                align: 'right',
                theme: 'glassWhite',
            },
            {
                title: 'Socratic Irony',
                texts: [
                    `Faming ignorance to draw out arguments to apply the socratic method to`,
                    `"Explain to me how the flat earth works"`
                ],
                image: require('./images/smallbrain.png'),
                align: 'center',
                theme: 'glassWhite',
            },
            {
                title: 'Logical Syllogism',
                texts: [
                    `A series of premises leading to a conclusion`,
                    `Allows you to make arguments with a clear structure`,
                    `1. All humans have a brain 2. Carson is a human 3. therefore Carson has a brain`
            ],
                image: require('./images/aristotle2.png'),
                align: 'left',
                theme: 'glassWhite',
            },
            {
                title: 'Fallacies',
                texts: [
                    `Illogical arguments that often sound convincing`,
                    `"Everyone I know says fentanyl is safe, therefore it is safe"`
                ],
                image: require('./images/fallacy.png'),
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    },
    {
        BGImage: require('./images/platoAcademy.png'),
        slideChildren: [
            {
                title: 'The End',
                align: 'center',
                theme: 'glassWhite',
            },
        ]
    }, */
]
