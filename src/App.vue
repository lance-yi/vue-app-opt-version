<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/list">list</router-link>
    </div>
    <transition :name="transitionName">
      <keep-alive :include="data">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      transitionName: ''
    }
  },
  computed: {
    // 要缓存的数据存放在vuex里面对应路由 name值
    ...mapState({
      data: state => {
        console.log(state)
        return state.global.data
      }
    })
  },
  methods: {
    // 设置Keep_alive路由
    setKeep_alive (to) {
      if (to.meta.keepAlive) {
        this.$store.dispatch({
          type: 'global/setData',
          payload: to.name
        })
      }
    }
  },
  watch: {
    '$route' (to, from) {
      // 此时从from页面跳转到to页面
      this.setKeep_alive(to)
      if (!from.name) {
        this.transitionName = ''
        return
      }
      const fromDepth = this.data.indexOf(from.name)
      const toDepth = this.data.indexOf(to.name)
      this.transitionName = toDepth > fromDepth ? 'slide-left' : 'slide-right'
    }
  }
}
</script>
<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  #nav {
    font-size: 32px;
    padding: 20px;
    background: #b3d4fc;
    z-index: 100;
    position: relative;
    text-align: center;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
/*  过度动画 */
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all .3s;
    position: absolute;
    width:100%;
    left:0;
  }
  .slide-right-enter {
    transform: translateX(-100%);
  }
  .slide-right-leave-active {
    transform: translateX(100%);
  }
  .slide-left-enter {
    transform: translateX(100%);
  }
  .slide-left-leave-active {
    transform: translateX(-100%);
  }
</style>
