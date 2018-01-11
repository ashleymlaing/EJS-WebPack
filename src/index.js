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
// import printMe from './print.js'
import start from './print.js'
import stop from './print.js'
import './style.css'
// import Icon from './twitter.jpg'
// import Data from './data.xml'

function component() {
    var element = document.createElement('div')
    var btn = document.createElement('button')
    var btn2 = document.createElement('button')
    var element2 = document.createElement('section')

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ')

    btn.innerHTML = 'Start'
    btn.onclick = start()

    btn2.innerHTML = 'Stop'
    btn2.onclick = stop()

    element.appendChild(btn)
    element.appendChild(btn2)
    element.appendChild(element2)
        // element.classList.add('hello')

    // Add the image to our existing div.
    // var myIcon = new Image()
    // myIcon.src = Icon
    //
    // element.appendChild(myIcon)

    // console.log(Data)

    return element
}

// document.body.appendChild(component())

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element)

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!')
            // printMe()
        document.body.removeChild(element)
        element = component(); // Re-render the "component" to update the click handler
        document.body.appendChild(element)
    })
}