import React, { Component } from 'react'
import getdata from "../../views/getdata";
import { List } from 'antd-mobile';
const Item = List.Item;
class Rank extends Component {

    render() {
        let {list=[]}=this.props.data;
        console.log(list);
        return (
            <div className="rank">
                  <List>{list.map((item)=>{
                    return(
                    <Item 
                       key={item.rankid}
                       id={item.id}
                        thumb={item.imgurl.replace("{size}","400")}
                        arrow="horizontal"
                        onClick={() => { 
                            this.props.history.push({
                            pathname:"/rank/info/"+item.rankid,
                            state:{title:item.rankname}
                        })}}
                    >{item.rankname}</Item>)
                    })}</List>
                   
            </div>
        )
    }
}
export default getdata("getRank",Rank);