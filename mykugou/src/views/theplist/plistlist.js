import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd-mobile';
const Item = List.Item;

class Plistlist extends Component {
    render() {
        console.log("组建出来了")
        let {list}=this.props;
        console.log(list)
        return (<React.Fragment>
            {list.map((item)=>{
                    return(
                        <Item key={item.hash} 
                        className="newsong" 
                        extra={<i className="icon iconfont icon-xiazai"></i>}
                        onClick={()=>{
                            console.log(111111111111)
                            this.props.tochange(list,item.hash);
                        }}
                        >{item.filename}</Item>
                    )
                })
            }
        </React.Fragment>)
    }
}
function changedata(dispatch){
    return {
      tochange(songlist,hash){
        dispatch({type:"change_list",songlist});
        dispatch({type:"change_hash",hash});
    }
}}
export default connect(null,changedata)(Plistlist);