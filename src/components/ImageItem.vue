<template>
  <div class="images">
    <!-- {{count}} -->
    <button @click="count -= 1"> - </button>
    <button @click="count += 1"> + </button><br><br>
    <button @click="count = 0">Clear</button>
    <br><br>
    <img v-for="item in count" :src="imgURL + item" :key="count">

  </div>
</template>

<script>
export default {
  props: {
    count: Number,
  },
  data(){
    return{
      count: 5,
      imgURL: 'https://picsum.photos/200/200/?random='
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
