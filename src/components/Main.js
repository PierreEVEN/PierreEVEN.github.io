import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import {GameEngines, Games, Other} from "../components/Projects/GameEngines";
const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/Games' component={Games}></Route>
            <Route exact path='/Other' component={Other}></Route>
            <Route exact path='/GameEngines' component={GameEngines}></Route>
        </Switch>
    );
}

export default Main;