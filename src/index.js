//const element = document.createElement('h1')
//element.innerText = 'hello react soy fabian'
//const container = document.getElementById('root')
//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Exercises from './pages/Exercises'
import 'bootstrap/dist/css/bootstrap.css'


const container = document.getElementById('root')



ReactDOM.render(<Exercises />, container)
