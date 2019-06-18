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
      <div
        class="p-2 bd-highlight ml-auto"
        @click="removeOrder(tableOrder.dbID)"
      > <i class="fas fa-trash"></i></div>

    </li>

  </div>
</template>

<script>
import axios from "axios";
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
    },
    removeOrder(dbID) {
      if (confirm("Möchtest Du das wirklich löschen?")) {
        this.$emit("removeOrder", dbID);
        axios.delete(
          `https://kunz-sushi-35c35.firebaseio.com/orderItem/${dbID}.json`,
          {
            params: {
              auth: this.$store.getters.serveToken
            }
          }
        );
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
