<template>
    <div class="manage">
        <button @click="add" class="add">新增</button>
        <div class="label" v-show="showAdd">
            <input type="text" v-model="value" placeholder="请输入人员姓名">
            <button @click="addName">确定</button>
        </div>  
        <table width="200px">
            <tr>
                <td>姓名</td>
                <td>操作</td>
            </tr>
            <tr v-for="(item,index) in people" v-bind:key = 'index'>
                <td>{{item.name}}</td>
                <td v-bind:id="index"><span @click="edit"> 编辑 |</span> <span @click="del"> 删除 </span></td>
            </tr>
        </table>
        <div class="mask label" v-show="showEdit">
            <div class="content">
                <input type="text" v-model="newValue" >
                <div class="btn">
                     <button @click="cancel">取消</button>
                     <button @click="editName">确定</button>
                </div>
            </div>   
        </div>
        <footer-nav v-bind:class = "{isManage:isNowpage}"></footer-nav>
    </div>
</template> 
<script>
import FooterNav from '@/components/footer'
export default {
    name:"manage",
    data(){
         return{
            isNowpage:true,
            showAdd:false,
            people:[{'name':'wangdan'},{'name':'jerry'},{'name':'john'}],
            value:'',
            showEdit:false,
            editid:0,
            newValue:''
         }
    },
    components:{
         FooterNav
    },
    methods:{
         add(){
             this.showAdd = true
         },
         addName(){
            var v = this.value;
            if(v.trim() == ''){
                 alert("请输入人员姓名")
            }else{
                 var data = {}
                 data.name = v
                 this.people.push(data)
            }
         },
         edit(e){
          //    console.log(e);
             var id  =  e.target.offsetParent.id;
             this.editid = id;
             this.showEdit = true;
             this.newValue  = this.people[this.editid].name
         },
         del(e){
             var  id = e.target.offsetParent.id;
             console.log(id)
             this.people.splice(id,1) 
         },
         cancel(){
              this.showEdit = false;
         },
         editName(){
              var  newValue = this.newValue;
              if(newValue.trim() == ''){
                    alert('请输入人员姓名')
              }else{
                    this.people[this.editid].name = this.newValue
                    this.showEdit = false;
              }
             
         }

    }

}
</script>
<style>
.add{
     width: 11rem;
     height: 2rem;
     border-radius: 5px;
     border: none;
     outline: none;
     background-color: #41b883;
     color: white;
}
.label{
     margin-top: 0.5rem;
}
.label input{
    width: 11rem;
     height: 2rem;
}
.label button{
     height: 2rem;
}
table{
     margin:1rem auto;
}
table tr{
     padding-left: 0.5rem;
}
table tr td{
      cursor: pointer;
}
.mask{
     background-color: rgba(0,0,0,0.8);
     width: 100%;
     height: 100%;
     position: fixed;
     z-index: 10;
     top: 0;
     display: table;
}
.mask .content{
     display: table-cell;
     vertical-align: middle;
}
.mask .content button{
     width: 5rem;
     margin-top: 1rem;
     background-color: #41b883;
     border: none;
     outline: none;
}
</style>

