<template>
    <div>
        <AppHeader></AppHeader>
        <Login v-if="!isLoggedIn"></Login>
        <router-view v-else ></router-view>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import Login from './components/Login'
import { mapGetters} from 'vuex';


export default {
    name: 'App', 
    components: {
        AppHeader,
        Login

    },
    computed: mapGetters(['isLoggedIn']),
}
</script>
