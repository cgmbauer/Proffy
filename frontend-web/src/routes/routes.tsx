import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Lading';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/study" exact component={TeacherList} />
      <Route path="/give-class" exact component={TeacherForm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
