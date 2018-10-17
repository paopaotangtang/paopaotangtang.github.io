import React, { Component } from 'react';
import {getTheplist} from "../../server/api";
import Loading from "../../common/load/loading";
import { Accordion, List } from 'antd-mobile';
import Plistlist from "../../views/theplist/plistlist"

const Item = List.Item;
class Theplist extends Component {
    state={
        data:{}
    }
    componentDidMount(){
        let {specialid}=this.props.match.params;
        getTheplist({specialid}).then((data)=>{
            this.setState({
                    data
            })
        })
    }
    render() {
        let {data=[]}=this.state;
        console.log(data)
        let info=[];
        let intro="";
        let imgurl="";
        data.list?info=data.list.list.info:[];
        data.list?intro=data.info.list.intro:"";
        data.list?imgurl=data.info.list.imgurl:"";
        return (
            <div className="thesinger">
              {imgurl?<div className="imgbox"><img src={imgurl.replace("{size}","400")} /></div>:<Loading />}
           
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header={intro.substr(0,18)} className="pad">{intro.substr(18)}</Accordion.Panel>
                </Accordion>
                <div className="song">                        
                        <List  className="my-list">
                        <Plistlist list={info}/>
                        </List>
               </div> 
            </div>
        )
    }
}
export default Theplist;
