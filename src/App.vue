<template>
  <div id="app">
    <div id="nav">
       <router-link to="/iput">我要疯狂输出</router-link><br/>
       <router-link to="/ilist">我要疯狂接收</router-link>
    </div>
    <router-view/>
    <App/>
  </div>
</template>


<script>
import App  from './components/comment_app.vue'
export default {
    mounted(){
        // 导航
        this.$router.push('/login')
    },
    methods:{
        goback(){
            this.$router.go(2);
        }
    },
    components:{
        App
    }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
