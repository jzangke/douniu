<template>
  <div class="home">
    <Header/>
    <div class="wrapper homeWrapper" ref="homeWrapper">
      <div class="content">
         <Swiper/>
          <Ads/>
          <TabBar/>
          <Goods/>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Header from "./components/header";
import Swiper from "./components/banner";
import Ads from "./components/ads";
import BScroll from "better-scroll";
import TabBar from "./components/tabBar"
import Goods from "./components/goods";
export default {
  components:{
    "Header":Header,
    "Swiper":Swiper,
    "Ads":Ads,
    "TabBar":TabBar,
    "Goods":Goods
  },
  created () {
    this.handleHomeData();
    this.handleGoodsList(this.page);

  },
  computed: {
    ...Vuex.mapState({
      state:state=>state.home,
      page:state=>state.home.page,
      goodsList:state=>state.home.goodsList
    })
  },
  watch: {
   goodsList(newVal,oldVal){
     //重新计算content高度
     this.scroll.refresh();

     //数据加载完毕允许进行下次加载
     this.scroll.finishPullUp();
   }
  },
  methods: {
    ...Vuex.mapActions({
      handleHomeData:"home/handleHomeData",
      handleGoodsList:"home/handleGoodsList"
    })
  },
  mounted () {
     this.scroll = new BScroll(this.$refs.homeWrapper,{
       pullUpLoad:true,
       click:true,
       tap:true
     });


     this.scroll.on("pullingUp",()=>{
       if(this.page<=7){
          this.handleGoodsList(this.page);
       }
     })
  }
}
</script>


<style scoped>
  .home,.homeWrapper{
    height: 100%;
    background: #f2f2f2;
  }
  
  .content{
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
</style>
