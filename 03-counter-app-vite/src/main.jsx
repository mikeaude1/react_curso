import React from 'react'
import ReactDOM from 'react-dom/client'

import {HelloWorldApp} from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import { CounterApp } from './CounterApp'
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp/>
        <CounterApp value={15}/>
    </React.StrictMode>
)