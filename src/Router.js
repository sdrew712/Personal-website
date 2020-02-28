import React from 'react'
import {
    BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import TopBar from './components/TopBar'

const Router = () => {
    return (
        <BrowserRouter>
            <TopBar />
            <Switch>
                <Route exact path='/' component={Home} /> 
                <Route exact path='/about' component={About} /> 
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default Router