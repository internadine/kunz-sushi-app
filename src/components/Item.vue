<template>

    <li v-if="item.type == selection" class="list-group-item text-left" >
        <span style="color: #990000">{{item.name}}</span>
        <small class="ml-4"> {{item.price}} Euro</small>
         <small class="ml-4" v-for="(item, index) in filling" :key="index" @click="remove(index)"> {{item}} </small>
        <select class="form-control inline" @change="order" v-model="quantity">
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
                        <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
        </select>
        <div class="container mt-3 text-muted" v-if="item.options">
            <span class="d-flex-inline justify-content-end p-3" v-for="(option, index) in item.options" :key="index" @click="selectFilling(option)">
             {{option}} </span>


        </div>
       
    </li>





</template>

<script>
    export default {
        name: 'Item',
        props: ["item", "selection"],
        data() {
            return {
                attachBG: false,
                quantity: 0,
                markClicked: false,
                filling: []

            }
        },
        methods: {
            order() {
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes();
                var dateTime = date+' '+time;
                const orderItem = {
                    name: this.item.name,
                    price: this.item.price,
                    quantity: this.quantity,
                    type: this.selection,
                    status: 'open',
                    orderTime: dateTime,
                    options: this.filling,
                };
                // eslint-disable-next-line
                console.log(orderItem)
                this.$store.dispatch('updateOrderItems', orderItem);
                this.filling = []
            },
            selectFilling(option) {
                this.filling.push(option)
            },
            remove(index){
                this.filling.splice(index, 1)
            } 
        
        }


    }
</script>

