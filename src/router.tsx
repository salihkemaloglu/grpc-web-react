import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { App } from './app';
import { Home, About, MembersPage } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Route component={App} />
        <Switch>
          <Route exact  path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/members" component={MembersPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
