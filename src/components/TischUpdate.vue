
<template>
    <div class="container text-info">
        <h1 class="text-center mt-5 text-info">Tisch {{table}}</h1>
        <form @submit.prevent="addTable">
          
            <div class="form-group mt-4 ">
                <label for="tisch">Tisch auswählen</label>
                <select class="form-control shadow" id="tisch" v-model="table">
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

              <div class="container text-right">
                <router-link to="/bestellung"><i class="fas fa-plus mt-3 text-info fa-3x"></i></router-link>
            </div>
            <ul class="list-group p2 shadow text-info mt-3" v-if="table">
                <tisch-update-item v-for="(item, index) in order" :key="index" :table="table" :item="item"></tisch-update-item>
            </ul>

           
            <div class="d-flex justify-content-center"><button class="btn btn-lg btn-info shadow mt-5 " type="submit">Bestellung abschicken</button></div>
            
        </form>

 

    </div>
</template>


<script>
import TischUpdateItem from './TischUpdateItem';
  import axios from 'axios';

export default {
    name: 'Tischupdate',
    data() {
        return {
            table: null,
            order: []
        }
    },
    components: {
       TischUpdateItem
    },
    created() {
      axios.get('https://kunz-sushi.firebaseio.com/orderItem.json')
        .then(response => {
          const data = response.data
          const order = []
          for (let key in data) {
            const item = data[key]
            item.id = data[key]
 
                 order.push(item)
 
           
          }
          this.order = order
        })
    },
    }

</script>
