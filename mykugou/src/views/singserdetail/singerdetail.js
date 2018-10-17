import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {getSingerdetail} from "../../server/api";

const Item = List.Item;
class Singerdetail extends Component {
    state={
        data:{}
    }
    componentDidMount(){
    let {classid}=this.props.match.params;
        getSingerdetail({classid}).then((data)=>{
                this.setState({data})
        });
    }
    
    render() {
        let {list=[]}=this.state.data;
        return (
            <div className="singerdetail">
                 <List>{list.map((item)=>{
                    return(
                    <Item 
                       key={item.singerid}
                       id={item.singerid}
                        thumb={item.imgurl.replace("{size}","400")}
                        arrow="horizontal"
                        onClick={() => {
                            this.props.history.push({
                                pathname:"/singer/info/"+item.singerid,
                                state:{title:item.singername}
                            })
                        }}
                    >{item.singername}</Item>)
                    })}</List>
            </div>
        )
    }
}
export default Singerdetail;
