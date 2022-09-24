<template>
  <div class="shop">
    <h1>This is an shop page</h1>
    <h2>Products: {{$route.params.productID}}</h2>
  </div>
</template>

<script>
  import ImageItem from '@/components/ImageItem.vue'

  export default {
  components: {
    ImageItem
  }
}
</script>