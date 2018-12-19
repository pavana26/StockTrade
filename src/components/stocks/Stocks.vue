<template>
     <div class="todowrapper" >
    <app-stock v-for ="stock in stocks" v-bind:stock="stock" :key="stock.id"></app-stock>
       
    </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
    
    components: {
        appStock : Stock
    },
    computed :{
        stocks(){
            return this.$store.getters.stocks;
        }
    }

}
</script>

<style>
.todoWrapper {
  border-bottom: 1px solid green;
  text-align: right;
  margin-bottom: 10px;
  margin-top: 20px;
  outline:sandybrown;
}

</style>
