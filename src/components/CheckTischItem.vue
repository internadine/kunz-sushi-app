<template>
  <div>
    <li class="d-flex bd-highlight list-group-item">
      <div class="p-2 bd-highlight">{{tableOrder.quantity}} x </div>
      <div
        class="p-2 bd-highlight"
        style="color: #990000 "
        :class="{checked: attachLine}"
        @click="markChecked(tableOrder.dbID)"
      >{{tableOrder.name}}</div>
      <div class="p-2 bd-highlight text-muted">{{tableOrder.party}}</div>
      <div
        class="p-2 bd-highlight"
        style="color: #990000"
      >{{tableOrder.sum}}</div>
      <div class="p-2 bd-highlight ml-auto">{{tableOrder.price}}</div>

    </li>

  </div>
</template>

<script>
export default {
  name: "Check",
  props: ["tableOrder"],
  data() {
    return {
      attachLine: false,
      fixLine: false
    };
  },
  created() {
    if (this.tableOrder.status === "checked") {
      this.attachLine = true;
    }
  },

  methods: {
    markChecked(dbID) {
      this.attachLine = !this.attachLine;
      if (this.attachLine == true) {
        this.$emit("checked", dbID);
      } else {
        this.$emit("unchecked", dbID);
      }
    }
  }
};
</script>

<style scoped>
.checked {
  text-decoration: line-through;
}
.fixLine {
  text-decoration-color: gray;
}
</style>
