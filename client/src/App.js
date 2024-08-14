import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Categories from './pages/Categories';
import Tags from './pages/Tags';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/categories" component={Categories} />
        <Route path="/tags" component={Tags} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;