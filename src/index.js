import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IconContext} from "react-icons";


const newDiv = document.body.appendChild(document.createElement('div'));
newDiv.id = "TailwindTranslator";

const root = ReactDOM.createRoot(newDiv);
root.render(
    <React.StrictMode>
        <IconContext.Provider value={{style: {verticalAlign: 'middle',width:'100%',height:'100%'}}}>
            <App/>
        </IconContext.Provider>
    </React.StrictMode>
);
reportWebVitals();