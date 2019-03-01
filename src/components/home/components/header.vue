<template>
    <div class="header">
        <div>
            <i class="iconfont">&#xe603;</i>
            <span>70s</span>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 1rem;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
        position: fixed;
        left: 0;
        top: 0;
    }
      .header>div{
          background: #f2f2f2;
          width: 5.6rem;
          height: .6rem;
          border-radius: .06rem;
          display: flex;
          align-items: center;
          color: #999;
      }

      .header>div>i{
          padding: 0 .16rem 0 .24rem;
          font-size: .3rem;
      }
</style>