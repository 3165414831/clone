<template>
    <div class="index">
        欢迎来到人员管理
        <footer-nav v-bind:class = "{isIndex:isNowpage}"> </footer-nav>
    </div>
</template>
<script>
import FooterNav from '@/components/footer'
export default {
    name:"index",
    data(){
         return {
              isNowpage:true
         }
    },
    components:{
         FooterNav
    }
}
</script>
<style>


</style>


