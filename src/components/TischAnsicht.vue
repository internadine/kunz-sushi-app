<template>
    <div class=" mt-5 ">


        <ul class="list-group shadow p-2 text-info">
            <li class="list-group-item" v-for="(item,index) in show" :key="index"> {{item.quantity}} x  <span class="ml-4"
                     style="color: #990000">{{item.name}}</span>


                <i class="d-flex fas fa-trash-alt px-2 justify-content-end" @click="remove(index)"></i>


                <span class="d-inline-flex text-muted justify-content-end" v-for="(option, index) in item.options"
                    :key="index">
                    <small>{{option}} </small> </span>
             </li>
        </ul> 

    </div>
</template>

<script>
    export default {
        name: 'TischAnsicht',
        data() {
            return {
                order: []
            }

        },
        computed: {
            show() {
                return this.$store.getters.orderItems;
            }
        }, 
        methods: {
            remove(index) {
                this.$store.dispatch('removeItem', index)
            }
        }
        
  }
        
    
</script>