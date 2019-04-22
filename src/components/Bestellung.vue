<template>
    <div class="container text-center mt-5">

            <button class="btn-lg btn-info px-5">BESTELLUNG </button>
            <ul class="list-group shadow p-2 text-info">
                <Item class="text-left" v-for="(dish, index) in menu" :key="index" v-bind:mydish="dish"></Item>
            </ul>
            <!-- Modal -->
<div class="modal fade" id="fillings" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>


</template>

<script>
    import Item from './Item.vue';
    import axios from 'axios';
    export default {
        name: 'Bestellung',
        components: {
            Item
        },
        data() {
            return {
                menu: []
            }
        },

        created() {
            axios.get('https://kunz-sushi.firebaseio.com/menu.json')
                .then(response => {
                    const data = response.data
                    const menu = []
                    for (let key in data) {
                        const item = data[key]
                        item.id = data[key]
                        menu.push(item)
                    }
                    this.menu = menu
                })
        }


    }
</script>