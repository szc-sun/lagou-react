import React, { Component } from 'react';
import {Route,Switch} from "react-router-dom";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Search from "./components/Search";
import Mine from "./components/Mine";
import Login from "./components/Login";
import Reg from "./components/Reg";
import Detail from "./components/Detail";

//import {Header,Footer,Home,Search,Mine,Login,Reg,Detail} from "./components";

class App extends Component {
  render() {
 
    return (
      <div className="App">
        <Header/>
        <Footer/>
        <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/home" component={Home} /> 
              <Route path="/search" component={Search} /> 
              <Route exact path="/mine" component={Mine} /> 
              <Route path="/mine/reg" component={Reg} /> 
              <Route path="/mine/login" component={Login} /> 
              <Route path="/detail" component={Detail} /> 
              {/* <Route path="/*" component={News} />  */}
              {/* <Route component={Home} />  */}
              {/*<Redirect to="/"/>*/}
          </Switch>
      </div>
    );
  }
}

export default App;
