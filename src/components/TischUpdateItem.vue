<template>
    <div>
        <li class="list-group-item" v-for="(item,index) in filter" :key="index"> {{item.quantity}} x <span class="ml-4"
                style="color: #990000">{{item.name}}</span>


            <i class="d-flex fas fa-trash-alt px-2 justify-content-end" @click="remove(index)"></i>


            <span class="d-inline-flex text-muted justify-content-end" v-for="(option, index) in item.options"
                :key="index">
                <small>{{option}} </small> </span>
        </li>
    </div>
</template>

<script>
    export default {
        Name: 'TischUpdateItem',
        props: ['item', 'table'],
        data() {
            return {
                Filter: []
            }
        },

        computed: {
            filter() {
                const allItems = this.item
                const Filter = []
                for (let key in allItems) {
                    const item = allItems[key]
                    if (item.table == this.table) {
                        Filter.push(item)
                    }

                }
                return Filter
            }
        }



    }
</script>