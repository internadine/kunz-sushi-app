<template>



        <li class="list-group-item" @click="attachBG = !attachBG"
        :class="{green: attachBG}">
            <span
                    style="color: #990000">{{mydish.name}}</span>
                   <small> {{mydish.price}} Euro </small>

                    <span class="d-flex text-muted justify-content-end" v-if="mydish.options">
                        <!-- Button trigger modal -->
                    <small> <a data-toggle="modal" data-target="#fillings">Füllung auswählen </a></small> </span>
        </li>
        
         



</template>

<script>
    export default {
        name: 'Item',
        props: ["mydish"],
        data(){
            return {
                attachBG: false
            }
        }


    }
</script>


<style scoped>
    .green {
        background-color: #e0e0e0; 
    }
</style>
