import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom app is running</h1>
        </div>
    )
}

/* const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit goole'
} */

const anotherElement = (
    <a href='https://google.com' target='_blank' >Visit google </a>
)

const anotherUser = "code with coffee"

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com',  target: '_blank' },
    'click me to visit google',
     anotherUser

)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    ReactElement
    
 
)
