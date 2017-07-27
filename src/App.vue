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
      Aproveite todas as promoções de doces do Quitutes d`Vó
    </div>
    
    <product v-for="product in products" :product="product" v-bind:key="product.id"></product>
  </div>
</template>

<script>
import Product from './components/Product'


import Firebase from 'firebase'

let config = {

}

//let app = Firebase.initializeApp(config);
//let db = app.database();

export default {
  name: 'app',

  created () {
    this.$http.get(this.API).then((response) => this.products = response.body)
  },
  data () {
    return {
      API: '/api/products',
      products: []
    }
  },
  methods: {
  },

  components: {
    Product
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
  background-color: #464646;
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

/*@media only screen and (max-width: 767px) {
  body {
    /* The file size of this background image is 93% smaller
       to improve page load speed on mobile internet connections */
    /*background-image: url(./assets/images/background-photo-mobile-devices.jpg);*/
  /*}
}*/

.logo {
  margin-top: 150px;
  padding-bottom: 50px;
}

</style>
