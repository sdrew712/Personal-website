import React from 'react'
import {
    BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import ShortStoriesList from './containers/ShortStoriesList'
import TopBar from './components/TopBar'
import ShortStory from './containers/ShortStory'

const Router = () => {
    return (
        <BrowserRouter>
            <TopBar />
            <Switch>
                <Route exact path='/' component={Home} /> 
                <Route exact path='/about' component={About} /> 
                <Route exact path='/shortstories' component={ShortStoriesList} />
                <Route exact path='/shortstories/:id' component={ShortStory} />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    )
}

export default Router