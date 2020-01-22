import React from 'react';
import { ContentFull, TitlePage } from '../../styles/global';

import { Container } from './styles';

export default function Aluno() {
  return (
    <>
      <Container>
        <ContentFull>
          <header>
            <TitlePage>Gerenciando Alunos</TitlePage>
          </header>

          <div>
            <button type="button">Cadastrar</button>
            <input type="text" name="search" placeholder="Buscar aluno" />
          </div>
        </ContentFull>
      </Container>
    </>
  );
}
