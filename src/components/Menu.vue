<template>
    <div class="container text-center ">
        <h2 class="mt-5">Neue Gerichte anlegen</h2>
        <div class="row mt-5 text-left ">
            <div class="col-2"></div>
            <div class="col-8 ">
                <div class="container border rounded p-5 shadow">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="number">Number</label>
                            <input type="number" name="" id="number" placeholder="Nummer" class="form-control" v-model="number">
                        </div>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="" id="name" placeholder="Name" class="form-control" v-model="name">
                        </div>
                        <div class="form-group">
                            <label for="price">Preis</label>
                            <input type="currency" name="" id="price" placeholder="Preis in Euro" class="form-control" v-model="price">
                        </div>
                        <div class="container p-3">
                                <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="lachs" value="Lachs" v-model="options" >
                                <label class="form-check-label" for="lachs">Lachs</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="thun" value="Thun" v-model="options" >
                                <label class="form-check-label" for="thun">Thun</label>
                            </div> 
                             <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="Garnele" value="Garnele" v-model="options">
                                <label class="form-check-label" for="garnele">Garnele</label>
                            </div>
                        </div>
                        <div class="container">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="mango" value="Mango" v-model="options" >
                                <label class="form-check-label" for="mango">Mango</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="gurke" value="Gurke" v-model="options" >
                                <label class="form-check-label" for="thun">Gurke</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="avo" value="Avo" v-model="options" >
                                <label class="form-check-label" for="avo">Avocado</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="frischkaese" value="Frischkäse" v-model="options" >
                                <label class="form-check-label" for="frischkaese">Frischkäse</label>
                            </div>
                        </div>


                      <button type="submit" class="btn btn-lg btn-secondary mt-5">Submit</button>

                    </form>
                </div>



            </div>
            <div class="col-2"></div>
        </div>


    </div>

</template>

<script>
import axios from 'axios'
    export default {
        name: 'Menu-Form',
        data() {
            return {
                number: null,
                name: '',
                price: null,
                options: []
        }
        }, 
        methods: {
            onSubmit() {
            const formData = {
                number: this.number,
                name: this.name,
                price: this.price,
                options: this.options
            }
            axios.post('https://kunz-sushi.firebaseio.com/menu.json', formData)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        }


        }
        
    }
</script>