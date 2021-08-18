<template>
 <SideBox>
      <el-button type="primary" @click="two">hello11</el-button>
   </SideBox>
</template>

<script>
import SideBox from './side-box.vue'
export default {
  components:{
    SideBox
  },
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
         name: 'Home',
       })
    },
     two() {
      this.$router.push(
        { path: '/home/123/he' }
      )
    }
  },
     
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

  
  
}
.content-box {
  position:absolute;
  right:0;
  width: calc(100% - 5rem);
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
  transform: translateX(calc(100% -  5rem));
  opacity: 0;
}
</style>