import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Aluno from '../pages/Aluno';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/alunos" component={Aluno} />
    </Switch>
  );
}
