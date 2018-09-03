import React, { Component } from 'react';
import {Route,Link,Switch,Redirect} from "react-router-dom";
import axios from "axios";
import './App.css';

const Home =  (state) => {
  console.log("Home:",state);
  return <div className="custom-info none" >
    <span className="info">
        10秒钟定制职位
    </span>
    <span className="go">
        <em className="icon"></em>
        <Link to="/mine/login" className="text">去登录</Link>
    </span>
    <ul className="list">
      <li className="activeable list-item" data-positionid="3867621" data-companyid="221657">
          <img src="//www.lgstatic.com/i/image2/M00/46/FC/CgoB5lrXGVaAUKcAAABFTCMZBRY710.jpg" className="item-logo" alt=""/>
          <div className="item-desc">
            <h2 className="item-title">花动传媒</h2>
            <p className="item-info">
                <span className="item-pos">
                    iOS研发工程师 [ 上海 ]
                </span>
                <span className="item-salary">12k-24k</span>
            </p>
            <p className="item-time">今天 10:03</p>
          </div>
        </li>
    </ul>
    {arr2}
    <Route path="/mine/login" component={Login} />
  </div>;
};
const Search =  (props) => {
  console.log("Search:",props);
  return <div>搜索</div>;
};
const Mine =  (props) => {
  console.log("Mine:",props);
  return <div>我的</div>;
};
const Login =  (props) => {
  console.log("Login:",props);
  return <div>登录</div>;
};
const Reg =  (props) => {
  console.log("Reg:",props);
  return <div>注册</div>;
};
let arr2=[1];
class App extends Component {
  constructor(...args){
    super(...args);
    this.state = {
      arr:[],
    };
  }
  getFilms(){//now-playing | coming-soon
    console.log("getFilms:");
    //https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
    let params = {__t:Date.now(),pageNo:1,pageSize:15};  
    let url ="/lg/listmore.json";
    axios.get(url,{params}).then(res=>{
      console.log(1,res.data);
      console.log(2,res.data.content.data.page.result);
      
      this.setState({
        arr:this.state.arr.concat(res.data.content.data.page.result),
      });
      arr2 = this.state.arr;
      console.log(5,arr2);
      console.log(6,this.state.arr);
    }).catch(err=>{
      console.log(4,err);	
    }); 
    
  }
  componentWillMount(){
      console.log("CompA------componentWillMount");
      this.getFilms();
      
  }

  render() {
    return (
      <div className="App">
        <div className="lg-header">
          <header id="header">拉勾网</header>
        </div>
        <footer id="footer">
          <Link  className="selected" to="/home">
            <span className="selected"></span>
            <span className="text">职位</span>
          </Link>
          <Link  className="" to="/search">
            <span className="selected"></span>
            <span className="text">搜索</span>
          </Link>
          <Link  className="" to="/mine">
            <span className="selected"></span>
            <span className="text">我的</span>
          </Link>
          
        </footer>
        <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/home" component={Home} /> 
              <Route path="/search" component={Search} /> 
              <Route path="/mine" component={Mine} /> 
              <Route path="/mine/reg" component={Reg} /> 
              {/* <Route path="/*" component={News} />  */}
              {/* <Route component={Home} />  */}
              {/*<Redirect to="/"/>*/}
          </Switch>
      </div>
    );
  }
}

export default App;
