<template>
    <div class="container text-center text-info">
        <h2 class="mt-5">Anmeldung</h2>
        <div class="row mt-5 text-left ">
            <div class="col-2"></div>
            <div class="col-8 ">
                <div class="container border rounded p-5 shadow">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">Email Adresse</label>
                            <input type="email" name="" id="email" placeholder="Email" class="form-control"
                                v-model="email">
                        </div>
                        <div class="form-group">
                            <label for="passwort">Passwort</label>
                            <input type="password" name="" id="passwort" placeholder="Passwort" class="form-control" v-model="password">
                        </div>

                        <button type="submit" class="btn btn-lg btn-secondary mt-5">Anmelden</button>

                    </form>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
    </div>

</template>


<script>
    import firebase from 'firebase/app'
    import 'firebase/auth'

    export default {
        Name: 'Login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            onSubmit() {
                const auth = firebase.auth()
                auth.signInWithEmailAndPassword(this.email, this.password).then(cred => {
                    console.log(cred.user.ra)
                    this.$store.dispatch('saveUserId', cred.user.ra)
                    this.$router.push("/bestellung")
                    }
                )
            }

        }
    }
</script>
