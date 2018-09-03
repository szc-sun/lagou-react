import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./index.css";

export default class Mine extends Component{
    constructor(...args){
      super(...args);
      this.state = {
        arr2:[
          {id:Math.random(),content:"投递",path:"/deliver",name:"deliver"},
          {id:Math.random(),content:"面试",path:"/interview",name:"interview"},
          {id:Math.random(),content:"邀约",path:"/invitation",name:"invitation"},
          {id:Math.random(),content:"收藏",path:"/collect",name:"collect"},
        ],
      }
    }
    render(){
      let arr2 = this.state.arr2;
      let aBtn=arr2.map((item)=><Link to= {item.path} key={item.id} className={item.name+' button'}><span>{item.content}</span></Link>);
      return <div className="lg-mine">
        <div id="mine">
          <div className="logininfo">
            <div className="nologin center">
              <Link className="loginbut"  to="/mine/login">登录 / 注册</Link>  
            </div>
          </div>
          <div className="buttons">
            {aBtn}
          </div>
        </div>
      </div>
    }
  
  }