import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Slider, WingBlank, WhiteSpace } from 'antd-mobile';
class Krc extends Component {
    state={
        time:0
    }
    log = (name) => {
        return (value) => {
          console.log(`${name}: ${value}`);
        };
    }
    ishand=false;
    gettime=(time)=>{
        let minu=parseInt(time/60);
        let sec = parseInt(time%60);
        if(minu<10){
            minu="0"+minu;
        }
        if(sec<10){
            sec="0"+sec;
        }
        time=minu+":"+sec;
        return time;
    }

    render() {
        let {data}=this.props;
        let {next,prev,changecurrent,changeplay,changekrc,isplay="true",imgUrl,songName}=data;
        let {duration,currentTime,krcData}=data;
        console.log(krcData)
        let lefttime=this.gettime(currentTime);
        let righttime=this.gettime(duration);
        return (
               <div className="krc" >
               <div  className="mask" style={{backgroundImage: 'url('+imgUrl+')'}}></div>
               <div className="clearmask">
                    <NavBar
                        icon={<Icon type="left" />}
                        onLeftClick={() => {changekrc()}}
                        >{songName}</NavBar>
                        <div><img src={imgUrl} /></div>
                        <div className="krccon"></div>
                        <WhiteSpace size="lg" />
                            <WingBlank size="lg">
                            <span className="current fl">{lefttime}</span>
                            <Slider
                                style={{ marginLeft: 50, marginRight: 50 }}
                                defaultValue={0}
                                min={0}
                                max={duration}
                                value={this.ishand?this.state.time:currentTime}
                                onChange={(time)=>{
                                    this.ishand = true;
                                    this.setState({
                                        time
                                    })
                                }}
                                onAfterChange={(time)=>{
                                    this.ishand=false;
                                    if(time!=currentTime){
                                        changecurrent(time)
                                    }
                                }}
                                ref="slider"
                            />
                            <span className="current fr">{righttime}</span>
                            </WingBlank>
                        <WhiteSpace size="lg" />
                        <div className="todo">
                            <i className="icon iconfont icon-icon-1" onClick={()=>{prev()}}></i>
                            <div className="playi" 
                            onClick={()=>{
                                console.log(isplay)
                                changeplay()
                                }}>
                            {isplay?(<i className="icon iconfont icon-zanting"></i>):(<i className="icon iconfont icon-tubiaozhizuomoban"></i>)}
                            </div>
                            <i className="icon iconfont icon-icon-"
                            onClick={()=>{next()}}
                            ></i>                        
                        </div>
                        <div className="download">
                        <i className="icon iconfont icon-xiazai"></i>
                        下载这首歌
                        </div>
                    </div>
                </div> 
        )
    }
}


export default Krc;
