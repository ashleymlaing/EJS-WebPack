// function component() {
//   var element = document.createElement('div')
//
//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//
//   return element
// }
//
// document.body.appendChild(component())

import _ from 'lodash'
import printMe from './print.js'
// import './style.css'
// import Icon from './twitter.jpg'
// import Data from './data.xml'

function component() {
    var element = document.createElement('div')
    var btn = document.createElement('button')

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)
        // element.classList.add('hello')

    // Add the image to our existing div.
    // var myIcon = new Image()
    // myIcon.src = Icon
    //
    // element.appendChild(myIcon)

    // console.log(Data)

    return element
}

document.body.appendChild(component())