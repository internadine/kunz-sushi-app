<template>
    <div class=" mt-5 ">
        <ul class="list-group shadow p-2 text-info">
            <li class="list-group-item" v-for="(item,index) in order" :key="index"> {{item.counter}} | <span
                    style="color: #990000">{{item.name}}</span>


                <i class=" fas fa-chevron-circle-up pl-5 pr-2 " @click="incrementCounter(index)"></i>
                <i class="fas fa-chevron-circle-down px-2" @click="decrementCounter(index)"></i>
                <i class="fas fa-trash-alt px-2" @click="remove(index)"></i>





                <span class="d-flex text-muted justify-content-end" v-for="(option, index) in item.options"
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
                order: [{
                        counter: 1,
                        name: 'Futo Maki',
                        options: ["Lachs", "Frischkäse"],
                        timeStamp: '17:30'
                    },
                    {
                        counter: 1,
                        name: 'Hoso Maki',
                        options: ["Lachs", "Frischkäse", "Avo"],
                        timeStamp: '17:30'
                    }
                ]
            }

        },
        methods: {
            incrementCounter: function (index) {
                this.order[index].counter += 1;
            },
            decrementCounter: function (index) {
                this.order[index].counter -= 1;
            },
            remove: function(index) {
                //some text
            }
        }
    }
</script>