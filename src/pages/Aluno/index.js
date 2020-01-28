import React, { useState } from 'react';
import { MdAdd, MdViewStream, MdViewModule } from 'react-icons/md';
import {
  Container,
  TitlePage,
  ButtonCreate,
  ButtonCancel,
} from '../../styles/global';
import Table from '../../componets/Table';

import { Info, Filter, FormBox } from './styles';

export default function Aluno() {
  const [showForm, setShowForm] = useState(true);

  return (
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

      {!showForm ? (
        <div>
          <Filter>
            <div>
              <MdViewStream size={30} color="#696a80" />
              <MdViewModule size={30} color="#cbced6" />
            </div>

            <button type="button">
              <MdAdd
                color="#696A80"
                size={25}
                onClick={() => setShowForm(true)}
              />
            </button>
          </Filter>

          <Table />
        </div>
      ) : (
        <FormBox>
          <h2>Cadastro de Aluno</h2>
          <form>
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" placeholder="nome" />
            </div>

            <div>
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" placeholder="email@email.com" />
            </div>

            <div className="col-3">
              <label htmlFor="name">Idade</label>
              <input type="text" name="idade" placeholder="idade" />
            </div>

            <div className="col-3">
              <label htmlFor="name">Peso</label>
              <input type="text" name="peso" placeholder="ex. 1.8" />
            </div>

            <div className="col-3">
              <label htmlFor="altura">Altura</label>
              <input type="text" name="altura" placeholder="ex. 1.6" />
            </div>

            <div>
              <ButtonCancel type="button" onClick={() => setShowForm(false)}>
                Cancelar
              </ButtonCancel>
              <ButtonCreate type="submit">Salvar</ButtonCreate>
            </div>
          </form>
        </FormBox>
      )}
    </Container>
  );
}
