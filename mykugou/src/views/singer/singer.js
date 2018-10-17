import React, { Component } from 'react'
import getdata from "../../views/getdata";
import { List } from 'antd-mobile';

const Item = List.Item;
class Singer extends Component {
    render() {
        let {list=[],origin=""}=this.props.data;
        let arr=[];
        let newarr=[];
        arr.push([list[0]]);
        let i=1;
        while(i<list.length){
            arr.push(list.slice(i,i+3));
            i+=3;
        }
        if(arr.length>1){
             newarr=arr;
        }
        return (
            <div className="singer">{
                newarr.map((item,index)=>{
                    return (<List  key={index} className="my-list">{
                        item.map((item2)=>{
                            return <Item key={item2.classid} arrow="horizontal" 
                            onClick={() => {
                                this.props.history.push({
                                    pathname:"/singer/list/"+item2.classid,
                                    state:{title:item2.classname}
                                })
                            }}>
                            {item2.classname}</Item>
                        })
                    }</List>)
                })
        }</div>
        )
    }
}
export default getdata("getSinger",Singer)
