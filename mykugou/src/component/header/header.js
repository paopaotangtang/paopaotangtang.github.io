
import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Tabs } from 'antd-mobile';
import {navData} from "../../router/config";
import { withRouter } from 'react-router-dom';
import {myJsonp} from "../../server/api";
import "./header.css";

const tabs = navData;

 class Header extends Component {
    tabchange=(data,index)=>{
        this.props.history.push(data.path);
    }
    render() {
        let {location} = this.props;
        // 从地址栏中拿到地址，然后去配置中找对应的下标，作为初始给tab添加样式的下标
        let innitidex = navData.findIndex(item => item.path === location.pathname)
        let index=0;
        if (innitidex !== -1) {
            index=innitidex;
        };
        let classnav=  <div className="classify">
                            <Tabs tabs={tabs}
                                initialPage={index}
                                onChange = {this.tabchange}
                            ></Tabs>
                        </div>
        let othernav=<div className="back">
                        <NavBar
                            mode="light"
                            icon={<Icon type="left" />}
                            onLeftClick={() => {this.props.history.go(-1)}}
                            // onClick={()=>{console.log(this.props)}}
                            >{this.props.location.state?this.props.location.state.title:""}</NavBar>
                    </div> 
        return (
            <header>    
              <NavBar
                    className="navbar"
                    leftContent={<div className="logo"><img src ={require("./logo.png")}/>萌喵音乐</div>}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} 
                        onClick={()=>{
                            this.props.history.push({pathname:"/search",state:{title:"搜索"}})
                        }
                        }
                            />
                    ]}
                    >{<div className="download">下载萌喵</div>}</NavBar>
                    {innitidex !== -1?classnav:othernav}
            </header>
        )
    }
}
export default withRouter(Header);

