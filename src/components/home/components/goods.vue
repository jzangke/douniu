<template>
    <div class="goodsList">
        <div class="goodsItem" v-for="(item,index) in goodsList" @click="handelClick(item)">
            <div class="goodsImg">
                <img :src="item.mainpic"/>
            </div>
           <div class="goodsName">{{item.name}}</div>
           <div class="goodsPrice">{{item.saleprice}}</div>
           <div class="goodsCount"><span>{{item.sumcount}}</span>人付款</div>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
export default {
    computed: {
        ...Vuex.mapState({
            goodsList:state=>state.home.goodsList
        })
    },
    methods:{
        handelClick(item){
            let requestid = item.requestid;
            let productid = item.id

            this.$router.push({name:'detail',query:{requestid,productid}})
        }
    }
}
</script>

<style scoped>
    .goodsList{
        margin:.2rem;
        background: #f2f2f2;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .goodsList>.goodsItem{
        width: 49%;
        background: #fff;
        margin: .16rem 0;
        padding: .2rem;
        font-size:.24rem;
    }

     .goodsList>.goodsItem>.goodsImg,.goodsList>.goodsItem>.goodsImg>img{
        width: 100%;
    }
    .goodsItem>.goodsName{
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
    }

    .goodsItem>.goodsPrice{
        height: .32rem;
        margin-bottom: .14rem;
        line-height: .32rem;
    }
</style>