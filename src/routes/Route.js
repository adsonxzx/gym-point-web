import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Sidebar from '../componets/Sidebar';
import Header from '../componets/Header';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/alunos" />;
  }

  return (
    <Route
      {...rest}
      render={props => {
        if (signed) {
          return (
            <>
              <Sidebar />
              <Header />
              <Component {...props} />
            </>
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}
