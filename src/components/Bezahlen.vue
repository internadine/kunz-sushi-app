<template>
  <div class="container">
    <h1 class="text-center mt-5 text-info">Tisch {{table}}</h1>


      <div class="form-group mt-4 text-info">
        <label for="tisch">Tisch auswählen</label>
        <select class="form-control shadow" id="tisch" v-model="table" @change="getTableData">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>



      <ul class="list-group p2 shadow text-info mt-5" v-if="order.length > 0">
        <bezahl-item v-for="(item, index) in order" :key="index" :pay="item"></bezahl-item>
      </ul>

      <ul class="list-group p2 shadow text-info mt-5" v-if="order.length > 0">
        <li class="d-flex bd-highlight list-group-item">
          <div class="p-2 bd-highlight">Summe in Euro </div>
          <div class="p-2 bd-highlight ml-auto p-2">{{sum}}</div>

        </li>
      </ul>
      <div class="container text-right mt-5"><button class="btn-lg btn-info shadow " @click="setStatus">Bezahlt</button>
      </div>
      <!--    <div class="d-flex justify-content-center"><button class="btn btn-lg btn-info shadow mt-5 " type="submit">Bestellung abschicken</button></div> -->


  </div>
</template>

<script>
  import axios from 'axios';
  import _ from 'underscore'
  import BezahlItem from './BezahlItem.vue'

  export default {
    name: 'Bezahlen',
    data() {
      return {
        table: null,
        order: [],
        sum: null,
      }
    },
    components: {
      BezahlItem
    },
    methods: {
      getTableData() {
        axios.get(
            `https://kunz-sushi.firebaseio.com/orderItem.json?orderBy="table"&equalTo="${this.table}"`
          )
          .then(response => {
            const data = response.data
            let order = []
            const priceArray = []
            let sum = null
            for (const key in data) {
              const item = data[key]
              item = _.extend(item, {
                dbID: key
              })
              item.id = data[key]
              order.push(item)
            }
            if (order.length < 1 || order == undefined)  {
              this.order = [];
              this.$router.push('/bezahlen')
            } else {
            order.forEach(el => {
              priceArray.push(parseFloat(el.price * el.quantity))
            })
            sum = priceArray.reduce((total, amount) => total + amount);      
            this.sum = sum
            this.order = order


            }
            
          })

      },
      setStatus() {
        this.order.forEach(el => {
           const paidOrder = {
          name: el.name,
          price: el.price,
          quantity: el.quantity,
          orderTime: el.orderTime,
          doneTime: el.doneTime,
          options: el.options,
          status: 'paid'
        };
        console.log(paidOrder)
          axios.put(`https://kunz-sushi.firebaseio.com/orderItem/${el.dbID}.json`, paidOrder)
            .then(response => {
            console.log(response);
            })
            .catch(err => {
              console.log(err);
            });

        })
        this.$router.push('/bestellung')


      }
    }

  }
</script>