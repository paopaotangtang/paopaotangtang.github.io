import React, { Component } from 'react'
import getdata from "../../views/getdata";
import { Carousel, WingBlank } from 'antd-mobile';
import { List } from 'antd-mobile';
import "../../common/iconfont/demo.css";
import "../../common/iconfont/iconfont.css";
import Newsonglist from "../../views/newsong/newsonglist";

 class Newsong extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      };
     
    render() {
        let {banner=[],list=[]}=this.props.data;
       
         
        return (
            <div className="newsong">
                <WingBlank
                style={{margin:0}}>
                    <Carousel
                    autoplay
                    infinite
                    >
                    {banner.map(val => (
                        <a
                        key={val.id}
                        href="待定"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val.imgurl}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                <div className="song">                        
                        <List  className="my-list">
                        <Newsonglist list={list}/>
                        </List>
               </div>                         
            </div>
        )
    }
}
export default getdata("getNewsong",Newsong);
