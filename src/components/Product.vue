<template>
  <div class="product">
    <div class="row shop">
        <div class="product-block">
          <div class="product-title">
            <h3>{{ product.title }}</h3>
            <p>R$ {{ product.price }}</p>
          </div>

          <img :src="product.imageUrl">
          <!--button @click="addToCart(item)">Add to cart</button-->
          <b-button :variant="'outline-success'" v-on:click="addls()">
              Adicionar ao carrinho
          </b-button>

        </div>
    </div>



    <!--div class="row product-title">
      <h1>{{ product.title }}</h1>
      <h2>{{ product.price }}</h2>
    </div>
    <b-card img src="'../assets/images/produtos/brigadeiro-1.png'"
            title="Skulls are nice"
            class="mb-2">
            <img src="'../assets/images/produtos/brigadeiro-1.png'"/>
          This is my opinion :)
          {{imageUrl}}
      </b-card>
      <b-button :variant="'outline-success'" href="">
        Adicionar ao carrinho
    </b-button-->
  </div>
</template>


<script>
import BootstrapVue from 'bootstrap-vue'

export default {
  name: 'product',
  props: ['product', 'localStorageParent', 'getls'],

  created () {
    this.imageUrl = this.product.imageUrl;
  },

  data () {
    return {

    }
  },

  methods: {
    addls() {
      console.log('ls' , this.localStorageParent)
      this.localStorageParent();
    }
  },
  computed: {
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.shop {
  width: 100%;
  margin-top: 0px;
  max-height: 400px;
  background: #fff;

  img {
    margin-top: 0px;
  }

  /*h3 {
    position: absolute;
    top: -85px;
    left: -30px;
    color: rgba(255, 255, 255, 0.3);
    font-family: sans-serif;
    font-size: 4em;
    font-weight: bold;
    letter-spacing: -2px;
  }*/


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
