import React from 'react';
import { Container } from '../../styles/global';
import Filter from '../../componets/Filter';

import diamond from '../../assets/images/diamond.png';
import start from '../../assets/images/start.png';
import gold from '../../assets/images/gold.png';
import { Plans } from './styles';

export default function Plono() {
  return (
    <Container>
      <h2>Gerenciando Planos</h2>

      <Filter options={false} />

      <Plans>
        <li>
          <span>620 Alunos</span>

          <div>
            <div>
              <img src={start} alt="" />
            </div>
            <strong>Start</strong>
            <span>R$ 120,00</span>
            <p>1 Mês</p>
          </div>

          <div>
            <button type="button">Editar</button>
            <button type="button">Apagar</button>
          </div>
        </li>

        <li>
          <span>620 Alunos</span>

          <div>
            <div>
              <img src={gold} alt="" />
            </div>
            <strong>Gold</strong>
            <span>R$ 109,00</span>
            <p>3 Meses</p>
          </div>

          <div>
            <button type="button">Editar</button>
            <button type="button">Apagar</button>
          </div>
        </li>

        <li>
          <span>620 Alunos</span>

          <div>
            <div>
              <img src={diamond} alt="" />
            </div>
            <strong>Diamond</strong>
            <span>R$ 89,00</span>
            <p>6 Meses</p>
          </div>

          <div>
            <button type="button">Editar</button>
            <button type="button">Apagar</button>
          </div>
        </li>

        <li>
          <span>620 Alunos</span>

          <div>
            <div>
              <img src={diamond} alt="" />
            </div>
            <strong>Diamond</strong>
            <span>R$ 89,00</span>
            <p>6 Meses</p>
          </div>

          <div>
            <button type="button">Editar</button>
            <button type="button">Apagar</button>
          </div>
        </li>
      </Plans>
    </Container>
  );
}
