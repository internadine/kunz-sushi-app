<template>
  <div class="container">


    <div class="menuItem text-info border rounded border-info shadow" v-for="(item, index) in sushi" :key="index">
      <div class="d-flex flex-row justify-content-between">
        <div class="p-2 "> <h4>Tisch {{item.table}} </h4>  </div>
        <div class="p-2 " > <h4 > <span style="color: #990000" class="ml-2">{{item.name}}</span> </h4> </div>
        <div class="p-2 text-muted" v-for="(option, index) in item.options" :key="index">{{option.options}} </div>
        <div class="p-2 "><i class="fas fa-check-circle fa-3x"></i></div>
      </div>
    </div>



  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'Sushi',
    data() {
      return {
        sushi: [
        ]
      }
    },
    created() {
      axios.get('https://kunz-sushi.firebaseio.com/orderItem.json?orderBy="type"&equalTo="sushi"')
        .then(response => {
          const data = response.data
          console.log(data)
          const order = []
          for (let key in data) {
            const item = data[key]
            item.id = data[key]

 
                 order.push(item)
                 console.log(order)
          }
          this.sushi = order
        })
    },
  }
</script>

<style scoped>
  .menuItem {
    background-color: whitesmoke;
    border: 1px solid rgb(22, 170, 170);
    width: 100%;
    height: 80px;
    margin-top: 2rem;
    padding: 3px;

  }
</style>