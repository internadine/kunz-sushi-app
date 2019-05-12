<template>
  <li class="d-flex bd-highlight list-group-item">
    <div class="p-2 bd-highlight">{{pay.quantity}} x </div>
    <div class="p-2 bd-highlight" style="color: #990000">{{pay.name}}</div>
    <div class="p-2 bd-highlight" @click="selectGroup(pay.party)">{{pay.party}}</div>
    <div class="p-2 bd-highlight" style="color: #990000">{{pay.sum}}</div>
    <div class="p-2 bd-highlight ml-auto">{{pay.price}}</div>

  </li>

</template>

<script>
  export default {
    name: 'BezahlAnsicht',
    props: ['pay'],
    methods: {
      selectGroup (payParty) {
        this.$emit('getGroup', payParty)
      }
    }

  }
</script>