// Core
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import App from "./App";

// Instruments
import "./theme/index.css";

// image


const ImageItemViewPage = (props) => {

  console.log('ID for the API call', props.match.params.id)

  return <h1>Hello world:)</h1>
}


ReactDOM.render(
  <React.StrictMode>
    <Router>

     <Route exact path='/' component={App} />
     <Route exact path='/image/:id' component={ImageItemViewPage} />

    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
