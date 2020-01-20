import React from 'react';

import { Container, Form } from './styles';
import logo from '../../assets/images/logo.svg';

export default function SignIn() {
  return (
    <Container>
      <Form>
        <img src={logo} alt="gym point" />

        <label htmlFor="email">SEU EMAIL</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="exemplo@email.com"
        />

        <label htmlFor="password">SEU EMAIL</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="*********"
        />

        <button type="submit"> Entrar no sistema </button>
      </Form>
    </Container>
  );
}
