import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import logo from '../../assets/images/logo-mini.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/alunos">
            <img src={logo} alt="Gym point" />
          </Link>
          <ul>
            <li>
              <Link to="/alunos" className="active">
                Alunos
              </Link>
            </li>
            <li>
              <Link to="/alunos">Planos</Link>
            </li>
            <li>
              <Link to="/alunos">Matriculas</Link>
            </li>
            <li>
              <Link to="/alunos">Pedidos de auxílio</Link>
            </li>
          </ul>
        </nav>

        <div>
          <strong>Adson Souza</strong>
          <span>sair</span>
        </div>
      </Content>
    </Container>
  );
}
