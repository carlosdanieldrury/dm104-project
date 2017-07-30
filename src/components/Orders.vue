<template>
  <div class="orders">
    <div class="row">
        <div class="product-block">
        <ul v-for="order in orders" :key="order['key']">
            <ul>
                <li v-for="item in order" :key="item.id">

                </li>
            </ul>

        </ul>
          <div class="product-title">
            <h3>{{ item.title }}</h3>
            <p>R$ {{ item.price }}</p>
            <p>{{ item.qtd }}</p>
          </div>

          <!--button @click="addToCart(item)">Add to cart</button-->
          <b-button :variant="'outline-success'" v-on:click="addls()">
              Adicionar ao carrinho
          </b-button>

        </div>
    </div>

  </div>
</template>


<script>
import BootstrapVue from 'bootstrap-vue'

export default {
  name: 'orders',
  props: ['orders'],

  created () {
   
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
