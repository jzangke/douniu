<template>
  <div class="container">
    <div class="ads">
      <div class="ads-list" v-for="(item,index) in grids">
        <div v-for="data in item.gridlist" :style="{'width':data.percent+'%'}">
          <img :src="data.bottompic" >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      grids: state => state.home.grids
    })
  }
};
</script>


<style scoped>
.container{
  
}

.ads-list {
  display: flex;
}
</style>