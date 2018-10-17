import React, { Component } from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { List } from 'antd-mobile';
const Item = List.Item;

export default class Search extends Component {
    state = {
        data:{},
        value: '美食'
      };
      
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
     
    componentDidMount(){
        this.autoFocusInst.focus();
        let a=null;
        window.getkrc=(res)=>{
            this.setState({
                data:res.data   
            })
        }
        let script = document.createElement("script");
        script.innerHTML="function getKrc(data){console.log(data)}"
        script.src = "http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=30&callback=getkrc";
        document.head.appendChild(script);   
      
    }
    render() {
        let {info=[]}=this.state.data;
        console.log(info)
        return (
            <div className="search">
                <SearchBar  ref={ref => this.autoFocusInst = ref} placeholder="歌手/歌名/拼音" />
                    <WingBlank>
                        <Button
                        onClick={this.handleClick}
                        >点击搜索</Button>
                    </WingBlank>

                <List renderHeader={() => '最近热门'} className="my-list">
                    {info.length>0?info.map((item)=>{
                        return <Item key={item.sort}>{item.keyword}</Item>
                    }):""}
                </List>
            </div>
        )
    }
}
