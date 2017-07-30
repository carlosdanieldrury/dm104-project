<template>
  <div class="orders">
    <h1>PEDIDOS:</h1>
    <div class="row">
        <div class="panel-body center">
            <table v-for="order in orders" :key="order['key']" class="table table-striped">
            <thead>
                <tr>
                <th>Data</th>
                <th>{{order.date}}</th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in order.items" :key="item.id">
                <td>{{item.title}}</td>
                <td>{{item.price}}</td>
                </tr>
            </tbody>
            </table>
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
   console.log('orders', this.orders)
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


</style>
