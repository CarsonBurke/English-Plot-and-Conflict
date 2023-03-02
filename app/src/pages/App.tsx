import React, { ReactElement } from 'react'
import { Slide } from '../components/Slide'
import { slides, SlideType } from '../config'
import logo from '../images/logo.png'
import stock1 from '../images/stock1.jpg'
import { timer } from '../utils'
import './app.css'

class SlideManager {

  slideIndex = 0
  slideChildIndex = 0
  slideEls = document.getElementsByClassName('slideParent')
  slideChildEls: HTMLCollection[] = []

  constructor() {
    console.log('constr')

  }

  init() {

    this.slideEls = document.getElementsByClassName('slideParent')
    this.slideChildEls = []

    console.log('init', this.slideChildEls)

    for (const el of this.slideEls) {
      console.log(el.children)
      this.slideChildEls.push(el.children)
    }
    this.showSlide(this.slideEls[0])
    this.showSlideChild(this.slideChildEls[0][0])
  }

  createSlideEls() {

    const slideEls = []

    for (let i = 0; i < slides.length; i++) {

      slideEls.push(<Slide slideIndex={i} />)
    }
    
    return slideEls
  }

  hotkeyManager(event: any) {
    const key = event.key

    console.log('hotkey', this.slideIndex, this.slideChildIndex, this.slideChildEls)
    if (key == 'ArrowLeft' || key == 'ArrowUp' || key == 'w' || key == 'a') {

        this.previousSlide()
        return
    }
    if (key == 'ArrowRight' || key == 'ArrowDown' || key == 's' || key == 'd') {

        this.nextSlide()
        return
    }
}

  async nextSlide() {

    if (await this.nextSlideChild()) return
    if (this.slideIndex + 1 === this.slideEls.length) return

    this.slideIndex += 1
    this.slideChildIndex = 0
    await this.hideSlide(this.slideEls[this.slideIndex - 1])

    this.showSlide(this.slideEls[this.slideIndex])
    this.showSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])
  }

  async previousSlide() {

    if (await this.previousSlideChild()) return
    if (this.slideIndex === 0) return

    this.slideIndex -= 1
    this.slideChildIndex = this.slideChildEls[this.slideIndex].length - 1
    await this.hideSlide(this.slideEls[this.slideIndex + 1])

    this.showSlide(this.slideEls[this.slideIndex])
    this.showSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])
  }

  async hideSlide(slide: Element) {

    slide.classList.add('hide')

    await timer(0.5)

    slide.classList.remove('hide')
    slide.classList.add('hidden')
  }

  async showSlide(slide: Element) {

    slide.classList.remove('hidden')
  }

  async nextSlideChild() {

    if (this.slideChildIndex + 1 === this.slideChildEls[this.slideIndex].length) return false

    this.slideChildIndex += 1
    await this.hideSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex - 1])

    await this.showSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])
    return true
  }

  async previousSlideChild() {
    if (this.slideChildIndex === 0) return false

    this.slideChildIndex -= 1
    await this.hideSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex + 1])

    await this.showSlideChild(this.slideChildEls[this.slideIndex][this.slideChildIndex])
    return true
  }

  async hideSlideChild(slideChild: Element) {

    slideChild.classList.add('hideSlideChild')

    await timer(0.5)

    slideChild.classList.remove('hideSlideChild')
    slideChild.classList.add('hidden')
  }

  async showSlideChild(slideChild: Element) {

    slideChild.classList.remove('hidden')
  }
}

const slideManager = new SlideManager()

document.addEventListener('keydown', (event) => { slideManager.hotkeyManager(event) })

window.onload = () => slideManager.init()

export default function App() {

  return (
    <div className="app">
      <main>
        {slideManager.createSlideEls()}
      </main>
    </div>
  )
}