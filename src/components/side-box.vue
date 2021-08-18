<template>
  <div class="full" @click="goBack">
     <transition name="slide-fade"> 
     <div v-show="show" class="content-box" :style="{width: sideSize}" @click.stop>
        <slot></slot>
       <router-view></router-view>
    </div>
      </transition>
   </div>

</template>

<script>
export default {
  props:{
    size: {
      type: String,
      default:  'full'
    }
  },
  data() {
    return {
      show:false
    }
  },
  computed: {
     sideSize () {
       const sizeMap ={
         full: ` calc(100% - 5rem)`,
         medium:`calc(100% - 50rem)`,
         small:`calc(100% - 100rem)`
       }
       return  sizeMap[this.size] ||  sizeMap['full']
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