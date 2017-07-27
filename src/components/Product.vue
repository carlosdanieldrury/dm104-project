<template>
  <div class="product">
    <h1>{{ product.title }}</h1>
    <h2>{{ product.price }}</h2>
    <b-card img="http://placeskull.com/200/200/ABABAB/-1/0"
            title="Skulls are nice"
            class="mb-2">
          This is my opinion :)
      </b-card>
      <b-button :variant="outline-success" href="">
        Adicionar ao carrinho
    </b-button>
  </div>
</template>


<script>
export default {
  name: 'product',
  props: ['product'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
