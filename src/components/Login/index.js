import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./index.css";

export default class Login extends Component{
    state={
      user:{
        username:"aaa",
        password:"111"
      },
      result:""
    }
    textU(ev){
      this.setState({
        user:{
          username:ev.target.value,
          password:this.state.user.password
        }
      })
    }
    textP(ev){
      this.setState({
        user:{
          username:this.state.user.username,
          password:ev.target.value
        }
      })
    }
    login(){
      console.log(11111);
      let url ="/anhao/users/login";
      axios.post(url,this.state.user).then(res=>{
          console.log(33333,res);
          console.log(55555,res.data);
          this.setState({
            result:res.data
          })
          if(res.data.error === 1){
             localStorage.token = res.data.token;
          } else {
            delete  localStorage.token;
          }  
      });
    }
  
    render(){
      return <div className = "lg-login">
      <div className="loginBox">
        <header className="form_header">
          <h2>登录拉勾</h2>
          <Link to="/mine/reg" className="brother_link">注册</Link>  
        </header>
       
          <input type="text" onChange={this.textU.bind(this)} placeholder="请输入已验证的手机号或邮箱" className="input_text user_input"/><br />
          <input type="text" onChange={this.textP.bind(this)} placeholder="请输入密码"/><br />
          <input onClick={this.login.bind(this)} className="btn" type="button"  value="登录" />
          <a href="/">返回首页</a><br />
          {this.state.result.msg}
          <span className="signin_type_btn">手机号登录</span>
      </div>
    </div>;
    }
   
  }