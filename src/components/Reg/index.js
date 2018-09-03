import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./index.css";

export default class Reg extends Component{
    state={
      user:{
        username:"aaa",
        password:"123"
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
  
    reg(){
      let url ="/anhao/users/reg";
        console.log(22222,url);
        axios.post(url,this.state.user).then(res=>{
            console.log(33333,res);
            console.log(55555,res.data);
            this.result = res.data;
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
      return <div className="regBox">
      <header className="form_header">
          <h2>登录拉勾</h2>
          <Link to="/mine/login" className="brother_link">登录</Link>  
        </header>
        <input type="text" onChange={this.textU.bind(this)} placeholder="请输入已验证的手机号或邮箱" className="input_text user_input"/><br />
          <input type="text" onChange={this.textP.bind(this)} placeholder="请输入密码"/><br />
          <input onClick={this.reg.bind(this)} className="btn" type="button"  value="注册" />
         <a href="/">返回首页</a><br />
         {this.state.result.msg}
    </div>
    }
  }