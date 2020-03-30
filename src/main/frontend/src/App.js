import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MenuComponent from "./components/MenuComponent";
import HomePage from "./views/HomePage";
import LoginPage from "./views/auth/LoginPage";
import RegisterPage from "./views/auth/RegisterPage";
import ProfilePage from "./views/auth/ProfilePage";
import BoardUser from "./views/test/board-user.component";
import BoardModerator from "./views/test/board-moderator.component";
import BoardAdmin from "./views/test/board-admin.component";

function App() {
  return (
      <Router>
          <div>
              <MenuComponent/>
              <h1 className="text-center">React-Blog Application</h1>
              <div className="container mt-3">
                  <Switch>
                      <Route exact path={["/", "/home"]} component={HomePage} />
                      <Route exact path="/login" component={LoginPage} />
                      <Route exact path="/register" component={RegisterPage} />
                      <Route exact path="/profile" component={ProfilePage} />
                      <Route path="/user" component={BoardUser} />
                      <Route path="/mod" component={BoardModerator} />
                      <Route path="/admin" component={BoardAdmin} />
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
