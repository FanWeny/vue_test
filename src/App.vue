<template>
  <nav>
    <!-- <router-link
      v-for="item in router"
      :key="item.path"
      :to="item.path">
    </router-link> -->
    <router-link v-for="item in routes" :key="item.path" :to="item.path">
      {{ item.chName ? item.chName : item.name }} |
    </router-link>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/shop">shop</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/calendar">日曆</router-link> |
    <router-link to="/scroll">scroll事件</router-link> |
    <router-link to="/featrue">圖片相關</router-link> | -->
  </nav>
  <nav>
    <router-link
      v-for="item in 10"
      :key="item"
      :to="{
        name: 'shop',
        params: {
          productID: item
        }
      }"
    >
      商品{{item}}
    </router-link>
  </nav>
  <router-view/>
</template>

<script>
  import {routes} from "@/router/index.js"
  console.log(routes);
  export default {
    data(){
      return{
        routes,
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
