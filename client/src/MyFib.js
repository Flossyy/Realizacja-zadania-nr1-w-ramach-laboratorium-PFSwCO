import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib'

export default () => {
    return (
        <div>
            <Route exact path="/myfib" component={Fib} />
        </div>
    );
};
