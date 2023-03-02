import React from "react"
import { SlideChild, slides, SlideType } from "../config"
import './slide.css'

function generateImage(image: string | undefined) {

    if (!image) return

    return <img src={image} alt="" className="slideImage" />
}

function generateSlideContent(slideChild: SlideChild) {

    if (!slideChild.texts || !slideChild.texts.length) return

    return (
        <div className="slideContent">
        
        {generateText(slideChild.texts)}

        {generateImage(slideChild.image)}

    </div>
    )
}

function generateText(texts: string[]) {

    if (texts.length === 1) {
        return (
            <p className="slideText">{texts[0]}</p>
        )
    }

    return (
        <ul className='slideListParent'>
            {generateList(texts)}
        </ul>
    )
}

function generateList(texts: string[]) {

    const els: JSX.Element[] = []

    for (const text of texts) {

        els.push(<li>{text}</li>)
    }

    return els
}

function createSlideChildrenEls(slideChildren: SlideChild[]) {

    const slideChildrenEls = []

    for (const slideChild of slideChildren) {

        slideChildrenEls.push(
            <div className={`slideChild hidden ${slideChild.theme}Theme ${slideChild.align}Align`}>
    
            <div className={`slideTopper`}>
    
                <h2 className="slideHeader">{slideChild.title}</h2>
    
            </div>

            {generateSlideContent(slideChild)}

        </div>
        )
    }

    return slideChildrenEls
}

interface SlideArgs {
    slideIndex: number
}

export function Slide(args: SlideArgs) {

    const slide = slides[args.slideIndex]

    return (
        <section className={`slideParent parallaxifyBg hidden`} style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${slide.BGImage})` }}>
            { createSlideChildrenEls(slide.slideChildren) }
            
        </section>
    )
}