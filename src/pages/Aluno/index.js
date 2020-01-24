import React from 'react';
import { MdAdd, MdViewStream, MdViewModule } from 'react-icons/md';
import { Container, TitlePage } from '../../styles/global';
import Table from '../../componets/Table';

import { Info, Filter } from './styles';

export default function Aluno() {
  return (
    <>
      <Container>
        <header>
          <TitlePage>Gerenciando Alunos</TitlePage>
        </header>

        <Info>
          <div>
            <span>Total Alunos</span>
            <strong>1450</strong>
          </div>

          <div>
            <span>Alunos Ativos</span>
            <strong>950</strong>
          </div>

          <div>
            <span>Matrículas do Mês</span>
            <strong>120</strong>
          </div>

          <div>
            <span>Matrículas do MêS</span>
            <strong>120</strong>
          </div>
        </Info>

        <Filter>
          <div>
            <MdViewStream size={30} color="#696a80" />
            <MdViewModule size={30} color="#cbced6" />
          </div>

          <button type="button">
            <MdAdd color="#696A80" size={25} />
          </button>
        </Filter>

        <Table />
      </Container>
    </>
  );
}
