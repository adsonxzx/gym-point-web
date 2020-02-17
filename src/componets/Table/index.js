import React from 'react';
import { MdModeEdit, MdClear } from 'react-icons/md';

import { Container, Delete, Edit, Status } from './styles';

export default function Table({ list, handleEditForm }) {
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
          {list.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.idade}</td>
              <td>
                <Status>?</Status>
              </td>
              <td>
                <div>
                  <Delete>
                    <MdClear color="#D37869" />
                  </Delete>
                  <Edit>
                    <MdModeEdit
                      color="#69BAB1"
                      onClick={() => handleEditForm(item.id)}
                    />
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
