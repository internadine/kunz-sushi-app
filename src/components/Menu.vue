<template>
    <div class="container text-center text-info">
        <h2 class="mt-5">Neue Gerichte anlegen</h2>
        <div class="row mt-5 text-left ">
            <div class="col-2"></div>
            <div class="col-8 ">
                <div class="container border rounded p-5 shadow">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="number">Number</label>
                            <input type="number" name="" id="number" placeholder="Nummer" class="form-control"
                                v-model="number">
                        </div>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" name="" id="name" placeholder="Name" class="form-control" v-model="name">
                        </div>
                        <div class="form-group row">
                            <div class="col">
                                <label for="price">Euro</label>
                                <input type="currency" name="" id="price" placeholder="Preis in Euro"
                                    class="form-control" v-model="euro">
                            </div>
                            <div class="col">
                                <label for="price">Cent</label>
                                <input type="currency" name="" id="price" placeholder="Preis in Euro"
                                    class="form-control" v-model="cent">

                            </div>


                        </div>

                        <div class="container p-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="drinks" value="drinks" v-model="type">
                                <label class="form-check-label" for="drinks">Getränk</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="dish" value="dish" v-model="type">
                                <label class="form-check-label" for="dish">Gericht</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="sushi" value="sushi" v-model="type">
                                <label class="form-check-label" for="sushi">Sushi</label>
                            </div>

                        </div>
                        <hr>
                        <div class="container p-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="lachs" value="Lachs"
                                    v-model="options">
                                <label class="form-check-label" for="lachs">Lachs</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="thun" value="Thun"
                                    v-model="options">
                                <label class="form-check-label" for="thun">Thun</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="Garnele" value="Garnele"
                                    v-model="options">
                                <label class="form-check-label" for="garnele">Garnele</label>
                            </div>
                        </div>

                        <div class="container">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="mango" value="Mango"
                                    v-model="options">
                                <label class="form-check-label" for="mango">Mango</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="gurke" value="Gurke"
                                    v-model="options">
                                <label class="form-check-label" for="thun">Gurke</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="avo" value="Avo" v-model="options">
                                <label class="form-check-label" for="avo">Avocado</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="frischkaese" value="Frischkäse"
                                    v-model="options">
                                <label class="form-check-label" for="frischkaese">Frischkäse</label>
                            </div>
                        </div>


                        <button type="submit" class="btn btn-lg btn-secondary mt-5">Anlegen</button>

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
                euro: null,
                cent: null,
                options: [],
                type: ''
            }
        },
        methods: {
            onSubmit(event) {
                const formData = {
                    number: this.number,
                    name: this.name,
                    price: `${this.euro}.${this.cent}`,
                    options: this.options,
                    type: this.type
                }
                axios.post('https://kunz-sushi-35c35.firebaseio.com/menu.json', formData, {
                        params: {
                            auth: this.$store.getters.serveToken
                        }
                    }, )
                    // eslint-disable-next-line 
                    .then(res => console.log(res))
                    // eslint-disable-next-line 
                    .catch(error => console.log(error))
                event.target.reset()
            }

        }

    }
</script>