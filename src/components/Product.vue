<template>
  <div class="product">
    <div class="row shop">
        <div class="product-block">
          <div class="product-title">
            <h3>{{ product.title }}</h3>
            <p>R$ {{ product.price }}</p>
          </div>
          <img :src="product.imageUrl">
          <b-button :variant="'outline-success'" v-on:click="addToCartChild(product)">
              Adicionar ao carrinho
          </b-button>

        </div>
    </div>
  </div>
</template>


<script>
import BootstrapVue from 'bootstrap-vue'

export default {
  name: 'product',
  props: ['product', 'addToCartParent'],

  created () {
    this.imageUrl = this.product.imageUrl;
  },

  data () {
    return {
      addToCart: null
    }
  },

  methods: {
    addToCartChild(product) {
      this.addToCartParent(product)
    }
  },
  computed: {
 
  }
}
</script>

<style scoped>

.shop {
  width: 100%;
  margin-top: 0px;
  max-height: 400px;
  background: #fff;

  img {
    margin-top: 0px;
  }


  .product-block {
    background: #fff;
    margin-bottom: 30px;
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3);
  }

  b-button {
    color: white;
    border: 1px;
    background: #00ADB5;
    transition: all .1s ease-out;
    &:hover {
      background: darken(#00ADB5, 5%)
    }
  }
}


.product-title {
  background-color: black;
  color: white;
  max-height: 100px;
  margin-top: 30px;
  margin-bottom: 0px;
  border-radius: 5px 5px 0px 0px;

  h3 {
    font-family: sans-serif;
    font-size: 8em;
    font-weight: bold;
    letter-spacing: -2px;
    color: white;
  }
}
</style>
