<template>
    <div class="tabBar wrapper" ref="tabBar">
        <ul class="content">
            <li v-for="(item,index) in tabBar">{{item.channelname}}</li>
        </ul>
    </div>

</template>

<script>
import Vuex from "vuex";
import BScroll from "better-scroll";
export default {
    computed: {
        ...Vuex.mapState({
            tabBar:state=>state.home.tabs
        })
    },
    updated() {
       if(!this.scroll){
           this.scroll = new BScroll(this.$refs.tabBar,{
               scrollX:true
           })
           
       }
    },
}
</script>



<style scoped>
    .tabBar{
        margin-top: .32rem;
        width: 100%;
        height: .96rem;
        background: #fff;
    }

    .tabBar>ul{
        width: max-content;
        height: 100%;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }
     .tabBar>ul>li{
         padding: 0 .24rem;
         flex-shrink: 0;

     }
</style>