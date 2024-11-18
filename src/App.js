import React, { Fragment, useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Tooltip } from 'react-tooltip';

const App = (props) =>
{
    return (
        <div className="App">
            <img src={ logo } width="128" height="128"/>
            <br/>
            <label class="fs-4 fw-bold text-success" data-tooltip-id="custom-tooltip"
                data-tooltip-content="Hi from the custom tooltip"
                data-tooltip-delay-hide={ 1500 }
                title="no, this is the standard tooltip :(">Hi There!  Hover over me for more info :)</label>
            {/*<Tooltip id="custom-tooltip" place="bottom" />*/}
        </div>
    );
}

export default App;
