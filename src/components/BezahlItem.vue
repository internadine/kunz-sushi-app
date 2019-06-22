<template>
  <li class="d-flex bd-highlight list-group-item">
    <div class="p-2 bd-highlight">{{pay.quantity}} x </div>
    <div
      class="p-2 bd-highlight"
      style="color: #990000"
      @click="selectPayItem(pay.name, pay.price)"
    >{{pay.name}}</div>
    <div
      class="p-2 bd-highlight"
      @click="selectGroup(pay.party)"
    >{{pay.party}}</div>

    <div class="p-2 bd-highlight ml-auto">{{parseFloat(pay.price).toFixed(2)}}</div>
    <div class="p-2 bd-highlight "><i
        class="fas fa-trash"
        @click="removeItem(pay.quantity, pay.price)"
      ></i></div>

  </li>

</template>

<script>
export default {
  name: "BezahlAnsicht",
  props: ["pay"],
  methods: {
    selectGroup(payParty) {
      this.$emit("getGroup", payParty);
    },
    selectPayItem(payItem, payPrice) {
      this.$emit("getSubtotal", payItem, payPrice);
    },
    removeItem(quantity, price) {
      if (parseFloat(this.pay.quantity) > 0) {
        this.pay.quantity = parseFloat(this.pay.quantity) - 1;
        this.$emit("deleteItem", price);
      }
    }
  }
};
</script>