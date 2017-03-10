import React from 'react';
import { render } from 'react-dom';

//import { Router, Route, hashHistory } from 'react-router';
import Application from './components/Application.jsx';

render(
    <Application/>,
    document.getElementById("app-root")
);