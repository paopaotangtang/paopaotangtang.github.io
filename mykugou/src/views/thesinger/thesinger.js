import React, { Component } from 'react';
import {getThesinger} from "../../server/api";
import Loading from "../../common/load/loading";
import { Accordion, List } from 'antd-mobile';
import Singerlist from "../../views/thesinger/singerlist"

const Item = List.Item;
class Thesinger extends Component {
    state={
        data:{}
    }
    componentDidMount(){
        let {singerid}=this.props.match.params;
        console.log(singerid);
        getThesinger({singerid}).then((data)=>{
            this.setState({
                    data
            })
        })
    }
    render() {
    
        let {songs=[],info=[]}=this.state.data;
        let {imgurl,intro=""}=info;
        let {list=[]}=songs;
        return (
            <div className="thesinger">
              {imgurl?<div className="imgbox"><img src={imgurl.replace("{size}","400")} /></div>:<Loading />}
           
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header={intro.substr(0,18)} className="pad">{intro.substr(18)}</Accordion.Panel>
                </Accordion>
                <div className="song">                        
                        <List  className="my-list">
                        <Singerlist list={list}/>
                        </List>
               </div>                 
            </div>
        )
    }
}
export default Thesinger;
