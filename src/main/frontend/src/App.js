import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from "./views/HomePage";
import MenuComponent from "./components/MenuComponent";
import LoginPage from "./views/LoginPage";

function App() {
  return (
      <Router>
          <>
              <MenuComponent/>
              <h1 className="text-center">React-Blog Application</h1>
              <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/login" exact component={LoginPage} />
                  {/*<Route path="/profile" exact component={ProfilePage} />*/}
                  {/*<Route path="/profile/:id" component={UserDetailPage} />*/}
                  {/*<Route path="/users" exact component={UserListPage}*/}
                  {/*<Route path="/posts" exact component={PostListPage} />*/}
                  {/*<Route path="/posts/:id" component={PostDetailPage} />*/}
              </Switch>
          </>
      </Router>
  );
}

export default App;
