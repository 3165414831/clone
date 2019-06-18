<template>
    <div class="bottom">
         <ul>
             <li><router-link to="/">首页</router-link></li>
             <li><router-link to="/manage">人员管理</router-link></li>
         </ul>
    </div>

</template>
<script>
export default {
    name:"bottom",
    data(){
         return{
              
         }
    }
}
</script>
<style>
    ul,li,a{ 
        margin: 0;
        padding: 0;
    }
    .bottom{
         width: 100%;
         position:fixed;
         bottom: 0;
         background-color:skyblue;
    }
    .bottom ul{
         display: flex;
         height: 3rem;
         line-height: 3rem;
    }
    .bottom ul li{
        list-style: none;
        width: 50%;
        text-align: center;
    }
     .bottom ul li:last-child{
        border: 1px solid #ccc;
     }
    a{
        text-decoration: none;
        color: coral; 
    }
    .router-link-active{
        text-decoration: none;
    }
    .isIndex ul li:first-child {
        background-color: skyblue;
    }
    .isIndex li:first-child a{
        color: pink;
    }
    .isManage ul li:last-child {
         background-color: skyblue;
    }
    .isManage ul li:last-child a{
        color: pink;
    }

</style>


