export default {
    handleHomeData(state,data){
        state.banners = data.banners;
        state.grids = data.grids;
        state.tabs = data.tabs;
    },
    handleGoodsList(state,params){
        state.goodsList = [...state.goodsList,...params];
        state.page++;
        console.log(state.goodsList);
    }
}