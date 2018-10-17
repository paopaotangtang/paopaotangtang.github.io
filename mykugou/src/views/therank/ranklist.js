import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd-mobile';
const Item = List.Item;

class Ranklist extends Component {
    render() {
        
        let {list}=this.props;
        return (<React.Fragment>
                {list.map((item,index)=>{
                        return(
                            <Item  key={item.hash} 
                            className="newsong" 
                            extra={<i className="icon iconfont icon-xiazai"></i>}
                            onClick={()=>{
                                this.props.tochange(list,item.hash);
                            }}
                            ><span className="index">{index+1}</span>{item.filename}</Item>
                        )
                    })}
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
export default connect(null,changedata)(Ranklist);