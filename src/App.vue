<template>
  <div id="app">
    <div class="parallax">
      <img class="logo" src="./assets/logo.png">
      <div id="caption-logo">Feito com carinho pela Vovó</div>
    </div>

    <div class="carousel">

      <b-carousel controls indicators :interval="6000" background="white">

      <!-- Text slides -->
      <b-carousel-slide background="white" height="400px"
                        caption="brigadeiros"
                        text="Adoce sua vida">

                        <img src="./assets/images/carousel/image1.png">
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide background="white" height="400px" caption="brigadeiros"
                        text="Adoce sua vida">
        <img src="./assets/images/carousel/image2.png">
      </b-carousel-slide>

      <!-- Slides with image -->
      <b-carousel-slide background="white" height="400px" caption="brigadeiros"
                        text="Adoce sua vida">
        <img src="./assets/images/carousel/image3.png">
      </b-carousel-slide>

      </b-carousel>

    </div>

    <div class="description">
      <h2>Aproveite todas as promoções de doces do Quitutes d`Vó</h2>
    </div>

    <h1>PRODUTOS</h1>
    <div class="row div-products center">
      <div class="product" v-for="product in products" v-bind:key="product.id">
        <product :addToCartParent='addToCart' :product="product"></product>
      </div>
    </div>
  
    <shopping-cart :doCheckoutParent='doCheckout' :removeFromCartParent='removeFromCart' v-bind:items="items"></shopping-cart>
    <orders :orders='orders'></orders>
  </div>
</template>

<script>
import Product from './components/Product'
import ShoppingCart from './components/ShoppingCart'
import Orders from './components/Orders'

import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyAbSQmWUYEtJ3euIS2YjQCp-x2lzxo1r6k",
  authDomain: "testfirebase-fe1d8.firebaseapp.com",
  databaseURL: "https://testfirebase-fe1d8.firebaseio.com",
  projectId: "testfirebase-fe1d8",
  storageBucket: "testfirebase-fe1d8.appspot.com",
  messagingSenderId: "14301186140"
}

let app = Firebase.initializeApp(config);
let db = app.database();

const orderRef = db.ref('pedidos')

export default {
  name: 'app',

  created () {
    this.$http.get(this.API).then((response) =>{
      this.products = response.body
      console.log(response.body)
      this.getFromLocalStorage();
    } )
  },

  firebase: {
    orders: orderRef
  },

  localStorage: {
    quitutes: {
      type: Object,
      default: {
        items: []
      }
    }
  },

  watch: {
    items () {
      this.addToLocalStorage(this.items)
    }
  },

  data () {
    return {
      API: '/api/products',
      products: [],
      orders: ['test'],
      items: []
    }
  },
  methods: {
    addToLocalStorage(items) {
      this.$localStorage.set('quitutes', items)
    },
    getFromLocalStorage() {
      console.log(this.$localStorage.get('quitutes'))
      let result = this.$localStorage.get('quitutes')
      this.items = result != null ? result : []
    },
    addToCart(item) {
      this.items.push(item);
      console.log('Item added to items ', item)
    },
    removeFromCart(item) {
      this.items.splice(this.items.indexOf(item), 1);
    },
    doCheckout () {
      let dataToBeSent = {
        "items": this.items,
        "date": new Date().toLocaleDateString()
      }
      orderRef.push(dataToBeSent)
      this.items = []
    }
  },
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.products.length; i++) {
        total += this.products[i].price;
      }
      return total;
    }
  },

  components: {
    Product,
    ShoppingCart,
    Orders
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}


body {
  padding: 0px;
  margin: 0px;
}

.product {
  width: 30rem;
  margin: 60px;
  margin-top: 0px;
  max-height: 300px;
}

.div-products {
    background: teal;
    align-content: center;
}


#caption-logo {
    -moz-box-align: center;
    -webkit-box-align: center;
    position: relative;
    width: 50%;
    margin: auto;
    background-color: darkorange;
    box-shadow: 10px 10px grey;
    color:white;
    font-family: 'Indie Flower';
    font-style: normal;
    font-variant: normal;
    text-shadow: 2px 0px 10px black;
    font-size:72px;
}

h1 {
	font-family: Chivo;
	font-size: 24px;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
	line-height: 26.4px;
}
h3 {
	font-family: Chivo;
	font-size: 14px;
	font-style: normal;
	font-variant: normal;
	font-weight: 500;
	line-height: 15.4px;
}
p {
	font-family: Chivo;
	font-size: 14px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	line-height: 20px;
}
blockquote {
	font-family: Chivo;
	font-size: 21px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	line-height: 30px;
}
pre {
	font-family: Chivo;
	font-size: 13px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	line-height: 18.5714px;
}

.parallax {
    /* The image used */
    background-image: url(./assets/images/background-photo.jpg);
    /* Set a specific height */
    min-height: 980px; 

    color: floralwhite;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;


}

.description {
  height:200px;
  color:black;
  background-color:white;
  font-size:36px;
  font-family: 'Maven Pro', sans-serif;
  text-shadow: 2px 5px 13px black;
  padding: 0px;
  margin: 0px
}

.logo {
  margin-top: 150px;
  padding-bottom: 50px;
}

</style>
