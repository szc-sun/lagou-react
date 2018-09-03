import React,{Component} from "react";
import axios from "axios";
import "./index.css";

export default class Search extends Component{
    constructor(...args){
      super(...args);
      this.state = {
        msg:"",
        arr:[],
        pageNo:1,
        city:"全国",
        cities:["北京","上海","广州","深圳","成都","杭州"],
        fadeOut:"none",
      }
  
    }
    search(){;
      this.getFilms();
    }
    more(){
      this.setState({
        pageNo:this.state.pageNo+1
      })
      console.log(this.pageNo);
      this.getFilms()
    }
    msgchange(ev){
      this.setState({
        msg:ev.target.value
      }); 
      console.log(this.state.msg)
    }
    cityS(item){
      console.log(item);
      this.setState({
        city:item
      })
    }
    fade(){
      console.log(1,this.state.fadeOut);
      this.setState({
        fadeOut:"block"
      })
    }
    isFade(ev){
      ev.stopPropagation();
      console.log(2,this.state.fadeOut);
      this.setState({
        fadeOut:"none"
      })
    }
  
    getFilms(){//now-playing | coming-soon
      console.log("getFilms:");
     //https://m.lagou.com/search.json?city=%E5%85%A8%E5%9B%BD&positionName=java&pageNo=1&pageSize=15
      let params = {__t:Date.now(),city:this.state.city,positionName:this.state.msg,pageNo:this.state.pageNo,pageSize:15};  
      let url ="/lg/search.json";
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
    render(){
      let arr = this.state.arr;
      let aULi = arr.map((item)=> 
      <li className="activeable list-item" key={item.positionId}>
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
      </li>);
  
      let cities = this.state.cities;
      let cUli = cities.map((item,index)=><li  key={index} className="cities" onClick={this.cityS.bind(this,item)}>
      {item}
      </li>)
  
      return  <div className="searchList">
        <div className="rinput">
          <div className="linputer">
            <div className="lbutton" onClick={this.fade.bind(this)}>
                <span className="city">{this.state.city}</span>
                <span className="cityicon"></span>
                <div className="mask" onClick={this.isFade.bind(this)}  style={{display:this.state.fadeOut}}>
                  <div className="fdialog-rcon">
                      <div className="cities-header">热门城市</div>
                      <ul className="cityBox">
                        {cUli}
                      </ul>
                  </div>
              </div>
  
            </div>
              <input id="search" className="inputer" onChange={this.msgchange.bind(this)} type="text" placeholder="搜索职位或公司" />
              <span className="search" onClick={this.search.bind(this)}>搜索<em className="searchicon"></em></span>
          </div>
        </div>
      <ul className="list">
      {aULi}
      
      </ul>
      <div className="more" onClick={this.more.bind(this)}>加载更多</div>
      </div>
      
    }
  }