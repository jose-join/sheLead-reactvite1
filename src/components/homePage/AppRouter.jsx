import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './appPage/Login';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        {/* Otras rutas */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
