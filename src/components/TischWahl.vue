<template>
  <div class="container text-center text-info">
    <div class="mt-5">
      <h2>Tisch auswählen</h2>
    </div>
    <div class="mt-5"> <button
        v-for="(n, index) in 20"
        :key="index"
        type="button"
        class="btn btn-outline-info m-1"
        @click="setTable(n)"
      >
        {{n}}</button>
      <button
        @click="setTable(30)"
        class="btn btn-outline-danger ml-1"
      >30</button></div>

  </div>
</template>

<script>
export default {
  name: "TischWahl",
  methods: {
    setTable(number) {
      this.$store.dispatch("setTable", number);
    }
  }
};
</script>
