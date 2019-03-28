import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from '../App';
import { Home, About, MembersPage, Login } from '../components';
import PrivateRoute from './PrivateRoute';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact  path="/" component={Home} />
          <PrivateRoute isSignedIn={false}   path="/about" component={About} />
          <PrivateRoute isSignedIn={false} path="/members" component={MembersPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};