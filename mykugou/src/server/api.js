import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/abc";


axios.interceptors.response.use(function({data}){
    let o={}
    if (data.banner){  // 新歌
        o.list = data.data;
        o.banner = data.banner;
        o.origin = '新歌';
    } else if (data.rank){
        o.list = data.rank.list;
        o.total = data.rank.total;
        o.origin = '排行';
    }else if (data.plist){
        o.list = data.plist.list.info;
        o.total = data.plist.list.total;
        o.origin = '歌单';
    } else if (data.list){
        o.list = data.list;
        o.origin = '歌手';
        o.info=data.info;
    }else if (data.singers) {
        o.list = data.singers.list.info;
        o.origin = '歌手列表';
      }else{
          return data;
      }

    return o;
})

function request(option){
    let defaults = {
        method:"get",
        path:"",
        params:""
    }
    Object.assign(defaults,option);
    return axios[defaults.method](defaults.path,{params:defaults.params}).catch((e)=>{alert("出错："+e)})
}

export function getNewsong(){
    return request({path:"/?json=true"});
}
export function getSongInfo(option) {
    let defaults = {
      hash:'',
      cmd:'playInfo'
    }
    Object.assign(defaults, option)
    return request({ path: `/app/i/getSongInfo.php`, params: defaults })
  }
export function getPlist(){
    return request({path:"/plist/index?json=true"});
}
export function getRank(){
    return request({path:"/rank/list?json=true"});
}
export function getSinger(){
    return request({path:"/singer/class?json=true"});
}
export function getSingerdetail(params ={ classid:''}){
    return request({path:`/singer/list/${params.classid}?json=true`});
}
export function getThesinger(params={singerid:''}){
    return request({path:`/singer/info/${params.singerid}?json=true`});
}
export function getTherank(params={rankid:''}){
    return request({path:`/rank/info/${params.rankid}?json=true`});
}
export function getTheplist(params={specialid:''}){
    return request({path:`/plist/list/${params.specialid}?json=true`});
}
export function getKrc(option) {
    let defaults = {
      hash: '',
      timelength:242000,
      cmd: 100
    }
    Object.assign(defaults, option)
    return request({ path: `/app/i/krc.php`, params: defaults })
  }

export function myJsonp(){
    let script = document.createElement("script");
    script.src = "http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=30&callback=getkrc";
    document.head.appendChild(script); 
}
export function tosearch(){
    let script = document.createElement("script");
    script.src="http://mobilecdn.kugou.com/api/v3/search/song?format=jsonp&keyword=haha&page=1&pagesize=30&showtype=1&callback=kgJSONP013509857"
    script.src = "http://mobilecdn.kugou.com/api/v3/search/hot?format=jsonp&plat=0&count=30&callback=getkrc";
    document.head.appendChild(script); 
}


export default {
    getNewsong,
    getPlist,
    getRank,
    getSinger,
    getSingerdetail,
    getThesinger,
    getTherank,
    getTheplist,
    getSongInfo,
    getKrc,
    myJsonp
  }
  