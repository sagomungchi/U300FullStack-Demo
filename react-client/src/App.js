import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import ProjectList from './components/ProejctList';
import Header from './components/Layout/Header';
import Mento from './components/Mento/Mento';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from './components/Project/AddProject';
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from './components/Project/UpdateProject';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/mento" component={Mento}/>
          <Route exact path="/projectList" component={ProjectList}/>
          <Route exact path="/addProject" component={AddProject}/>
          <Route exact path="/updateProject/:id" component={UpdateProject}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
