<template>
    <div>
        
    </div>
</template>


<script>
import {goodsDetail} from "../../apis/home.js";
export default {
    async created() {

        let {productid,requestid} = this.$route.query;
        let data = await goodsDetail({productid,requestid});
        console.log(data);

    },

}
</script>


<style lang="">
    
</style>