<template>
  <div class="full" @click="goBack">
     <transition name="slide-fade"> 
     <div v-show="show" class="content-box" @click.stop>
      hello22jjj
       <el-button type="primary" @click="two">hello22</el-button>
       <router-view></router-view>
    </div>
     </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:false
    }
  },
  mounted() {
    this.show = true
  },
  methods: {
    goBack() {
       this.$router.replace({
         name: 'home1',
       })
    },two() {
      this.$router.push(
        { path: '/home/123/he/123' }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.full {
   position:fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  background:rgba(0, 0, 0, .5);
  z-index: 4;

  
  
}
.content-box {
  position:absolute;
  right:0;
  width: calc(100% - 50rem);
  height: 100vh;
  background: #fff;
  touch-action: none;
  
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(calc(100% -  50rem));
  opacity: 0;
}
</style>