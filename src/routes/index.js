import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Aluno from '../pages/Aluno';
import SignIn from '../pages/SignIn';
import Matricula from '../pages/Matricula';
import Plano from '../pages/Plano';
import Auxilio from '../pages/Auxilio';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/alunos" component={Aluno} />
      <Route path="/matriculas" component={Matricula} />
      <Route path="/planos" component={Plano} />
      <Route path="/auxilios" component={Auxilio} />
    </Switch>
  );
}
