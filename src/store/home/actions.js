import {HomeData,goodsList} from "../../apis/home";
export default {
   async handleHomeData({commit}){
        let data = await HomeData({os:3});
        
        commit("handleHomeData",data.data);
    },
    async handleGoodsList({commit},params){
        console.log(params)
        let data = await goodsList(params);
        console.log(data.data.list)
        commit("handleGoodsList",data.data.list)
    }
}