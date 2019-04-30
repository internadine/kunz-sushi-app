<template>

    <li v-if="item.type == selection" class="list-group-item text-left" @click="attachBG = !attachBG"
        :class="{grey: attachBG}">
        <span style="color: #990000">{{item.name}}</span>
        <small class="ml-4"> {{item.price}} Euro </small>
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

        <span class="d-flex text-muted justify-content-end mt-2" v-if="item.options">
            <!-- Button trigger modal -->
            <small> <a data-toggle="modal" data-target="#fillings">Füllung auswählen </a></small> </span>

    </li>





</template>

<script>
    export default {
        name: 'Item',
        props: ["item", "selection"],
        data() {
            return {
                attachBG: false,
                quantity: 0
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
                    orderTime: dateTime
                };
                // eslint-disable-next-line
                console.log(orderItem)
                this.$store.dispatch('updateOrderItems', orderItem);
            }
        }


    }
</script>


<style scoped>
    .grey {
        background-color: #e0e0e0;
    }
</style>