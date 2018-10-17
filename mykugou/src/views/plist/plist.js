import React, { Component } from 'react'
import getdata from "../../views/getdata";
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Plist extends Component {
    render() {
        let {list=[]}=this.props.data;
        return (
            <div className="plist">
                 <List className="my-list">
                 {list.map((item)=>{
                     return(
                            <Item
                            key={item.specialid}
                            arrow="horizontal"
                            thumb={item.imgurl.replace("{size}","400")}
                            multipleLine
                            onClick={() => {
                                this.props.history.push({
                                    pathname:"/plist/list/"+item.specialid,
                                    state:{title:item.specialname},
                                    img:item.imgurl.replace("{size}","400"),
                                    intro:item.intro
                                })
                            }}
                            >
                            {item.specialname} <Brief><i className="icon iconfont icon-erji"></i>{item.playcount}</Brief>
                            </Item> 
                        )
                 })}
                  </List>
            </div>
        )
    }
}
export default getdata("getPlist",Plist);