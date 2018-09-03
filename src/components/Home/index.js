import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./index.css";

export default class Home extends Component{
    constructor(...args){
      super(...args);
      this.state = {
        arr:[],
        pageNo:1,
      }
    }
    more(){
      this.setState({
        pageNo:this.state.pageNo+1
      })
      console.log(this.pageNo);
      this.getFilms()
    }
    getFilms(){//now-playing | coming-soon
      console.log("getFilms:");
      //https://m.lagou.com/listmore.json?pageNo=2&pageSize=15
      let params = {__t:Date.now(),pageNo:this.state.pageNo,pageSize:15};  
      let url ="/lg/listmore.json";
      axios.get(url,{params}).then(res=>{
        console.log(1,res.data);
        console.log(2,res.data.content.data.page.result);
        
        this.setState({
          arr:this.state.arr.concat(res.data.content.data.page.result),
        });
        console.log(6,this.state.arr);
      }).catch(err=>{
        console.log(4,err);	
      }); 
      
    }
    componentWillMount(){
        console.log("Home------componentWillMount");
        this.getFilms();
    }
    render(){
      let arr = this.state.arr;
      let aULi = arr.map((item,index)=> 
      <Link className="activeable list-item" key={index} to="/detail">
        <img src={'//www.lgstatic.com/'+item.companyLogo} className="item-logo" alt=""/>
        <div className="item-desc">
            <h2 className="item-title">{item.companyName}</h2>
            <p className="item-info">
                <span className="item-pos">
                {item.positionName} [ {item.salary} ]
                </span>
                <span className="item-salary">{item.salary}</span>
            </p>
            <p className="item-time">{item.createTime}</p>
        </div>
    </Link>);
      
      return <div className="custom-info none">
        <span className="info">
            10秒钟定制职位
        </span>
        <span className="go">
            <em className="icon"></em>         
            <Link to="/mine/login" className="text">去登录</Link>
        </span>
        <ul className="list">
          {aULi}
          <div className="more" onClick={this.more.bind(this)}>加载更多</div>
        </ul>
       
      </div>
    
    }
  }