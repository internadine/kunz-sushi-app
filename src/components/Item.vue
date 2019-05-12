<template>

    <li v-if="item.type == selection" class="list-group-item text-left">
        <div class="p-2 bd-highlight" style="color: #990000">{{item.name}} <small class="text-info ml-3"> {{item.price}}
                Euro </small></div>
        <div v-if ="item.options" class="p-2 bd-highlight" style="color: #990000"> Füllung: 
            <small class="ml-4 text-info"  v-for="(item, index) in filling" :key="index"
                @click="remove(index)"> {{item}} </small> </div>
        <div class="p-2 bd-hightlight">
            <select class="form-control" @change="order" v-model="quantity">
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

        </div>

        <div class="p-2 bd-highlight text-info" v-if="item.options">
        

            <small class="ml-4 text-muted" v-for="(option, index) in item.options" :key="index" @click="selectFilling(option)">
                {{option}} </small>


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
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var time = today.getHours() + ":" + today.getMinutes();
                var dateTime = date + ' ' + time;
                const orderItem = {
                    name: this.item.name,
                    price: this.item.price,
                    quantity: this.quantity,
                    type: this.selection,
                    status: 'open',
                    orderTime: dateTime,
                    options: this.filling
                };
                // eslint-disable-next-line
                console.log(orderItem)
                this.$store.dispatch('updateOrderItems', orderItem);
                if (this.filling.length > 0 ) {
                    this.quantity = 0;
                }
                this.filling = []
                
            },
            selectFilling(option) {
                this.filling.push(option)
            },
            remove(index) {
                this.filling.splice(index, 1)
            }

        }


    }
</script>