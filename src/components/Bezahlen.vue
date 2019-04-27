<template>
    <div class="container">
     <p v-for="(item, index) in show" :key="index">{{item.table}} - {{item.party}} - {{item.name}} </p>
    </div>
</template>

<script>

export default {
    name: 'Bezahlen',
    computed: {
    show () {
      return this.$store.getters.orderItems 
    }
  }
    
}
</script>

