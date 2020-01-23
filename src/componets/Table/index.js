import React from 'react';
import { MdModeEdit, MdClear } from 'react-icons/md';

import { Container, Delete, Edit, Status } from './styles';

export default function Table() {
  const alunos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Idade</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(() => (
            <tr>
              <td>213</td>
              <td>Adson</td>
              <td>adson@asao.com</td>
              <td>25</td>
              <td>
                <Status>Ativo</Status>
              </td>
              <td>
                <div>
                  <Delete>
                    <MdClear color="#D37869" />
                  </Delete>
                  <Edit>
                    <MdModeEdit color="#69BAB1" />
                  </Edit>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
