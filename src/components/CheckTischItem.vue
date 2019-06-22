<template>
  <div>
    <li class="d-flex bd-highlight list-group-item">
      <div class="p-2 bd-highlight">{{tableOrder.quantity}} x </div>
      <!-- mark as checked -->
      <div
        v-if="fixLine"
        class="p-2 bd-highlight fixLine"
        style="color: #990000 "
      >{{tableOrder.name}}</div>
      <!-- open for toggle check status -->
      <div
        v-else
        class="p-2 bd-highlight"
        style="color: #990000 "
        :class="{checked: attachLine}"
        @click="markChecked(tableOrder.id)"
      >{{tableOrder.name}}</div>

      <div class="p-2 bd-highlight text-muted">{{tableOrder.party}}</div>
      <div
        class="p-2 bd-highlight"
        style="color: #990000"
      >{{tableOrder.sum}}</div>
      <div
        class="p-2 bd-highlight ml-auto"
        @click="removeOrder(tableOrder.id)"
      > <i class="fas fa-trash"></i></div>

    </li>

  </div>
</template>

<script>
import db from "./firebaseinit";
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
      this.fixLine = true;
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
    },
    removeOrder(dbID) {
      if (confirm("Möchtest Du das wirklich löschen?")) {
        this.$emit("removeOrder", dbID);
        db.collection("orderItems")
          .doc(dbID)
          .delete();
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
  text-decoration: line-through;
}
</style>
