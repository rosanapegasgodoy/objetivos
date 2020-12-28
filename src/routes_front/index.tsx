import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Objectives from '../pages/Objectives';
import UserObjectives from '../pages/UserObjectives';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/objetivos" exact component={Objectives} />
    <Route path="/objetivos/:email" exact component={UserObjectives} />
  </Switch>
);

export default Routes;


// <Route path="/repositories/:repository+" component={Repository} />