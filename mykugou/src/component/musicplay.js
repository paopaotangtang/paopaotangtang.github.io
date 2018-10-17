import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactDOM from "react-dom";
import {getSongInfo,getKrc} from "../server/api";
import Krc from "./krc";
class Musicplay extends Component {
    state={
        songinfo:"",
        isplay:true,
        nowIndex:-1,
        haskrc:false,
        duration:0,
        currentTime:0,
        krcData:""
    }
    changekrc=()=>{
        this.setState({
            haskrc:false
        })
    }
    changeplay=()=>{
        let audio=this.refs.audio;
        if(audio.paused){
            audio.play();
            this.setState({
              isplay:true
          })
        }else{
            audio.pause();
            this.setState({
              isplay:false
          })
        }
    }
    next=async ()=>{
        let now=this.state.nowIndex;
        console.log("当前是",now);
        let {songlist}=this.props;
        if(now==songlist.length-1){
            now=0
        }else{
            now++;
        }
        console.log("该播放",now)
        let hash=songlist[now].hash;
        let data=await getSongInfo({hash});
        this.setState({
            songinfo:data,
            isplay:true,
            nowIndex:now
        })
    }
    prev=async ()=>{
        let now=this.state.nowIndex;
        let {songlist}=this.props;
        if(now==0){
            now=songlist.length-1;
        }else{
            now--;
        }
        let hash=songlist[now].hash;
        let data=await getSongInfo({hash});
        this.setState({
            songinfo:data,
            isplay:true,
            nowIndex:now
        })
    }
    changecurrent=(currentTime)=>{
        let audio=this.refs.audio;
        audio.currentTime=currentTime;
        this.setState({
            currentTime
        })        
    }
    async componentWillReceiveProps(theprops){
        let fixedaudio=this.refs.fixedaudio;
        fixedaudio.style.display="block";
        let {songlist,hash}=theprops;
        let {filename}=songlist;
        let now=songlist.findIndex((item)=>{return item.hash===hash});   
        let data=await getSongInfo({hash});
        let krcData = await getKrc({hash});
        this.setState({
            krcData:krcData,
            songinfo:data,
            nowIndex:now
        })
    }

    componentDidMount(){
        let audio=this.refs.audio;
        audio.addEventListener("loadedmetadata",()=>{
            this.setState({
                duration:audio.duration
            })
        })
        audio.addEventListener("timeupdate",()=>{
            this.setState({
                currentTime:audio.currentTime
            })
        })
        audio.addEventListener("ended",()=>{
               this.next();
            
        })
       
    }
    render() {
        let songinfo=[];
        this.state.songinfo?songinfo=this.state.songinfo:[];
        let  {songName,imgUrl,singerName,url}=songinfo;
        imgUrl?imgUrl=imgUrl.replace("{size}","400"):"";
        return ReactDOM.createPortal(
            <React.Fragment>
                <div className="fixedaudio" ref="fixedaudio">
                <audio controls autoPlay src={url}  ref="audio"></audio>
                    <div className="myaudio" >
                        <img src={imgUrl} onTouchStart={()=>{
                            console.log(this.state.haskrc)
                           this.setState({
                            haskrc:true
                           })
                            }}/>
                        <div className="info"><div className="sname">{songName}</div><div className="sinname">{singerName}</div></div>
                    <div onTouchEnd={this.changeplay}>
                    {this.state.isplay?(<i className="icon iconfont icon-zanting"></i>):(<i className="icon iconfont icon-tubiaozhizuomoban"></i>)}
                    </div>
                        <i className="icon iconfont icon-icon-"
                        onTouchEnd={this.next}
                        ></i>
                        <i className="icon iconfont icon-xiazai"></i>
                    </div> 
                </div>
                {this.state.haskrc?<Krc 
                data={{
                    next:this.next,
                    prev:this.prev,
                    changecurrent:this.changecurrent,
                    changeplay:this.changeplay,
                    changekrc:this.changekrc,
                    isplay:this.state.isplay,
                    imgUrl:imgUrl,
                    songName:songName,
                    duration:this.state.duration,
                    currentTime:this.state.currentTime,
                    krcData:this.state.krcData
                }} />:""}
            </React.Fragment>
            ,
            document.body
        )
    }
}
function mapStateToProps(state){
    return {
        songlist:state.songlist,
        hash:state.hash
    }
}
export default connect(mapStateToProps)(Musicplay);
