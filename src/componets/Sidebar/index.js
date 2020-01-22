import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdPerson,
  MdPortrait,
  MdConfirmationNumber,
  MdAssignment,
} from 'react-icons/md';

import { Container } from './styles';
import logo from '../../assets/images/logo-gym.svg';

export default function Sidebar() {
  return (
    <Container>
      <Link to="/alunos">
        <img src={logo} alt="Gym point" />
      </Link>

      <ul>
        <li>
          <Link to="/alunos">
            <MdPerson size={24} color="#CBCED6" />
            Alunos
          </Link>
        </li>
        <li>
          <Link to="/alunos" className="active">
            <MdConfirmationNumber size={22} color="#CBCED6" />
            Planos
          </Link>
        </li>
        <li>
          <Link to="/alunos">
            <MdPortrait size={22} color="#CBCED6" />
            Matriculas
          </Link>
        </li>
        <li>
          <Link to="/alunos">
            <MdAssignment size={22} color="#CBCED6" />
            Auxílio
          </Link>
        </li>
      </ul>
    </Container>
  );
}
