import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { animateEls, initScroller } from './scroller'

initScroller()

window.addEventListener('resize', animateEls)
window.addEventListener("load", animateEls)
window.addEventListener("scroll", animateEls)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) 

root.render(
  <App />
)