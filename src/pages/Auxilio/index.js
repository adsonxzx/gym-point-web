import React from 'react';
import Question from '../../componets/Question';

import { Container } from '../../styles/global';

export default function Auxilio() {
  return (
    <Container>
      <h2>Pedidos de Auxílio</h2>

      <div>
        <Question />

        <Question />
      </div>
    </Container>
  );
}
