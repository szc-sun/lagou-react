import React,{Component} from "react";
import {Link} from "react-router-dom";
import "./index.css";

export default class Footer extends Component {
    constructor(...args){
      super(...args);
      this.state = {
        arr:[],
        iNow:0,
        arr2:[
          {router:"/home",text:"职位"},
          {router:"/search",text:"搜索"},
          {router:"/mine",text:"我的"},
  
        ],
      };
    }
    render() {
      let arr2 = this.state.arr2;
      let aLi = arr2.map((item,index)=><Link className="" to={item.router} key={index}>
      <span className="selected"></span>
      <span className="text">{item.text}</span>
    </Link>)
      return (
          <footer id="footer">
            {aLi}            
          </footer>
    );
  }
}