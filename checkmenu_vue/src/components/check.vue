<template>
      <div id="app">
        <header>
            <div class="left">
              <div class="upcheck" v-for="item in uplist" :key="item.id">{{item.title}}<span class="close" @click="remove(item.id)"> ×</span></div>
            </div>
            <div class="open" @click="show=!show">+</div>
        </header>
        <div class="hiddenbox" v-show="show">
            <input type="search" placeholder="搜索">
            <div class="option">
                <div v-for ="item in list" :key="item.id">
                    <div :class="{checked:item.select,unchecked:!item.select}"
                        @click="change(item.id)"
                    ></div>
                    {{item.title}}</div>
            </div>
        </div>
    </div>
</template>
<script>
let list =[
        {
            id:1,
            title: '变更中',
            select: false
        },
        {
            id:2,
            title: '未生效',
            select: true
        },
        {
            id:3,
            title: '作废',
            select: true
        },
        {
            id:4,
            title: '正常',
            select: false
        },
        {
            id:5,
            title: '审核中',
            select: false
        }];
    export default{
        name:"checkmenu",
         data(){
             return {
                list:list,
                uplist:list.filter(function(item){
                        return item.select;
                    }),
                show:false 
             }
            },
            methods:{
                change(id){
                    this.list.forEach(function(item){
                        if(item.id==id){
                            item.select=!item.select;
                        }
                    })
                   this.uplist=this.list.filter(function(item){
                        return item.select;
                    })
                },
                remove(id){
                    this.list.forEach(function(item){
                        if(item.id==id){
                            item.select=!item.select;
                        }
                    })
                    this.uplist=this.list.filter(function(item){
                        return item.select;
                    })
                }
            }
    }
</script>
<style>
        header{
            width: 450px;
            height: 40px;
            padding: 10px;
            border: 2px solid #000;
            overflow: hidden;
        }
        .open{
            float: right;
            text-align: center;
            width:40px;
            height: 40px;
            font: 40px/40px Arial;
            border: 2px solid #000;
            border-radius:50%; 
            cursor: pointer;
        }
        .left{
            float: left;
        }
        .left .upcheck{
            display: inline;
            padding: 5px;
            margin-right: 5px;
            font:16px/40px "微软雅黑";
            background: blue;
            color: #fff;
            border-radius:10px; 
        }
        .hiddenbox{
            width: 450px;
            padding: 10px;
            border: 2px solid #000;
            border-top:0; 
            text-align: center;
        }
        .hiddenbox input{
            width: 300px;
            height: 40px;
            border: 1px solid #000;
            outline: none;
            border-radius:20px; 
            text-indent: 10px;
        }
        .unchecked{
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 1px solid #000;
        }
        .checked{
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 1px solid #000;
            background:url("./checked.png") ;
            background-size: cover;
        }
      .option{
          text-align: left;
          padding: 20px ;
          font:18px/20px "微软雅黑";
      }
</style>