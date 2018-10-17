import Newsong from "../views/newsong/newsong";
import Rank from "../views/rank/rank";
import Plist from "../views/plist/plist";
import Singer from "../views/singer/singer";
import Singerdetail from "../views/singserdetail/singerdetail";
import Thesinger from "../views/thesinger/thesinger";
import TheRank from "../views/therank/therank";
import Theplist from "../views/theplist/theplist";
import Search from "../views/search/search"
let navData = [
    { 
        title: '新歌',
        path:"/",
        component:Newsong
    },
    { 
        title: '排行',
        path:"/rank",
        component:Rank
    },
    { 
        title: '歌单',
        path:"/plist",
        component:Plist
    },
    { 
        title: '歌手',
        path:"/singer",
        component:Singer
    }

]
let singerData=[
    {
        title: '歌手信息',
        path:'/singer/list/:classid',
        component:Singerdetail 
    }
    ,
    {
        title: '这个歌手',
        path:'/singer/info/:singerid',
        component:Thesinger 
    }, 
    {
        title: '排行分类',
        path:'/rank/info/:rankid',
        component:TheRank 
    },
    {
        title: '歌单信息',
        path:'/plist/list/:specialid',
        component:Theplist 
    },
    {
        title: '搜索界面',
        path:'/search',
        component:Search 
    }
]
export {navData};
export default [...navData,...singerData];