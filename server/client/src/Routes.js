import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { ErrorComponent } from './Common';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './Home'));
const Login = lazy(() => import(/* webpackChunkName: "Login" */ './Login'));

/* Using HashRouter because GitHub Pages doesn’t support routers 
that use the HTML5 `pushState` history API under the hood 
(for example, React Router using `browserHistory`) so if you refresh the 
Browser Page it gives a 404 Error page. 
This is because when there is a fresh page load for a url like 
`http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, 
the GitHub Pages server returns 404 because it knows nothing of `/todos/42`.
*/
const Routes = () => (
  <HashRouter>
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/home" render={() => <Home />} />
        <Route
          path="*"
          render={() => <ErrorComponent errorMessage="Incorrect URL" />}
        />
      </Switch>
    </Suspense>
  </HashRouter>
);

export default Routes;
