import React, { Component } from 'react'
import {getTherank} from "../../server/api";    
import Loading from "../../common/load/loading";
import { List } from 'antd-mobile';
import Ranklist from "../../views/therank/ranklist"
const Item = List.Item;
 class TheRank extends Component {
    state={
        data:{}
    }
     componentDidMount(){
        let {rankid}=this.props.match.params;
        getTherank({rankid}).then((data)=>{
                this.setState({data})
        });
        
    }


    render() {
        let {info=[],songs=[]}=this.state.data;
        let {imgurl}=info;
        let {list=[]}=songs;
        let d=new Date();
        let update=d.toLocaleDateString();
        return (
            <div className="therank">
            {imgurl?<div className="imgbox"><img src={imgurl.replace("{size}","400")} /></div>:<Loading />}
            <div className="update">上次更新时间：{update}</div>
            <div className="song">                        
                        <List  className="my-list">
                        <Ranklist list={list}/>
                        </List>
           </div>               
          </div>
        )
    }
}
export default TheRank;