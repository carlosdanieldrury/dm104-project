<template> 
  <div class="shopping-cart">
    <div class="products" v-show="items.length > 0">
      <ul>
          <li v-for="item in items" :key="item.id" transition="fade">
            <img class="img-item-cart" :src="item.imageUrl">
            <p><strong>{{ item.qtd }}</strong> - {{ item.title }} <i class="fa fa-trash" @click="removeFromCartChild(item)"></i></p>
          </li>
      </ul>
      <div>
        <button @click="verified = true, showCart = false, doCheckout()">Check out</button>
      </div>

    </div>
    <div v-show="items.length === 0">
        <p>Seu carrinho está vazio!<p/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'shopping-cart',
  props: ['items', 'removeFromCartParent', 'doCheckoutParent'],

  data () {
    return {
    }
  },

  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    removeFromCartChild(item) {
      this.removeFromCartParent(item)
    }, 
    doCheckout () {
      this.doCheckoutParent();
    }
  }
}
</script>
<style scoped>

* {
     margin: 0 auto;
    padding: 0.5em;
    text-align: center;
}
 
   .img-item-cart {
      max-width: 10px;
      max-height: 10px;
    }

  .shopping-cart {
    position: fixed;
    right: 0em;
    top: 0em;
    text-align: right;
    background: rgba(0,0,0,0.85);
    color: white;
    z-index: 1;

    .fa-shopping-cart, .cart-size {
      cursor: pointer;
      font-size: 1.25em;
      user-select: none;
    }

   

    .fa-shopping-cart {
      padding: 1em 1em 1em 0;
    }

    .cart-size {
      padding: 1em 0 1em 1em;
    }


    .cart-items {
      padding: 0 1em 2em 1em;

      .cartTable {
        width: 20em;
      }
      
      .cartImage {
        width: 4em;
        height: 4em;
        margin: 0.5em auto;
        position: relative;
        cursor: pointer;
        
        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.25);
          transition: all 0.1s;
        }
        
        i {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1.5em;
          z-index: 1;
          transition: all 0.25s;
        }
        
        &:hover {
          i {
            text-shadow: 1px 2px 5px black;
          }
          
          &:after {
            background: rgba(0,0,0,0.5);
          }
        }
        
        &:active {
            i {
            text-shadow: 0px 0px 1px black;
          }
        }
      }

      .cartSubTotal {
        border-top: 1px solid white;
        font-size: 1.25em;
      }

      .clearCart {
        float: left;
        margin-top: 2em;
        margin-bottom: 1.25em;
      }
      
      .checkoutCart {
        float: right;
        margin-top: 2em;
        margin-bottom: 1.25em;
      }
    }
  }
</style>
