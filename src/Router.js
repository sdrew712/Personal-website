import React from 'react'
import {
    BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} /> 
                <Route exact path='/about' component={About} /> 
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default Router