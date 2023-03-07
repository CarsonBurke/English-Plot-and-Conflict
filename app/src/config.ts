import society from './images/society.png'

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
