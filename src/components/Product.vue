<template>
  <div class="product">


    <div class="row shop">
          <div>
          <li>
            <div class="product-title">
              <h3>{{ product.title }}</h3>
              <p>R$ {{ product.price }}</p>
            </div>

            <img :src="product.imageUrl">
            <!--button @click="addToCart(item)">Add to cart</button-->
            <b-button :variant="'outline-success'" href="">
                Adicionar ao carrinho
            </b-button>
            </li>
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
  props: ['product'],

  created () {
    this.imageUrl = this.product.imageUrl;
  },

  data () {
    return {

    }
  },

  methods: {

  },
  computed: {
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 20rem;
}

.shop {
  width: 20rem;
  margin: 20px;
  max-height: 400px;
  h3 {
    position: absolute;
    top: -85px;
    left: -30px;
    color: rgba(255, 255, 255, 0.3);
    font-family: sans-serif;
    font-size: 4em;
    font-weight: bold;
    letter-spacing: -2px;
  }
  ul {
    margin-top: 90px;
  }
  li div {
    padding: 30px;
    background: #fff;
    margin-bottom: 20px;
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.3);
  }
  button {
    color: white;
    border: 0;
    background: #00ADB5;
    margin: 0;
    transition: all .1s ease-out;
    &:hover {
      background: darken(#00ADB5, 5%)
    }
  }
}

.product {
  width: 20rem;
  max-height: 400px;
}

.product-title {
  background-color: black;
  color: white;
  max-height: 50px;
  border-radius: 5px 5px 0px 0px;

  h3 {
    font-family: sans-serif;
    font-size: 4em;
    font-weight: bold;
    letter-spacing: -2px;
    color: white;
  }
}
</style>
