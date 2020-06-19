import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/pages/login";
import Register from "./components/pages/userRegistration";
import Dashoard from "./components/pages/dashoard";
import Protected from "./components/common/router/Protected";
import Footer from "./components/common/footer";
import Sidebar from "./components/common/leftside"
import Header from "./components/common/header";
import Basetemp from "./components/pages/basetemp";
import UserList from "./components/pages/users/UserList";
import UserRequest from "./components/pages/users/UserRequest";
import Reports from "./components/pages/reports";
import Training from "./components/pages/training/Index";
import Help from './components/pages/help';
import ViewQuestion from "./components/pages/questions/ViewQuestion";
import Questions from './components/pages/questions';
import Calendars from './components/pages/calender';
import Contacts from './components/pages/contacts';
import PostContact from './components/pages/postcontact';
import NotFound from './components/pages/nofound/NotFound';


const Home =()=>{
  return<div>
    <h1>Welcome to ResourcePro </h1>
  </div>
}
function App() {

  return (
    <div className="App">

      <Router>
      <Switch>
        <Route path="/header" component={Header} />
        <Route path="/sidebar" component={Sidebar} />
        <Route path="/dashboard" component={Dashoard} />
        <Route path="/footer" component={Footer} />
        <Route path="/users" component={UserList} />
        <Route path="/usersrequest" component={UserRequest} />
        <Route path="/reports" component={Reports} />
        <Route path="/training" component={Training} />
        <Route path="/basetemplate" component={Basetemp} />
        <Route path="/help" component={Help} />
        <Route path="/questions" component={Questions} />
        <Route path="/viewquestion/:id" component={ViewQuestion} /> 
        <Route path="/calendar" component={Calendars} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/postcontact" component={PostContact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/protected" component={Protected} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
        </Switch>
      </Router>
    </div>);
}

export default App;
