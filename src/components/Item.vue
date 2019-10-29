<template>

  <!-- show type of menu-item -->
  <li
    v-if="item.type == selection"
    class="list-group-item text-left"
  >
    <div
      class="bd-highlight"
      style="color: #990000"
    ><span
        v-if="quantity > 0"
        class="mx-2"
        style="color: #5bc0de"
      >{{quantity}}</span><span @click="addFilling = true">{{item.name}}</span>
      <i
        class="fas fa-check-circle fa-2x ml-1"
        style="float: right;"
        @click="order()"
      ></i>

      <button
        type="button"
        class="btn btn-outline-info mx-1"
        style="float: right;"
        @click="add()"
      >+</button>

      <button
        type="button"
        class="btn btn-outline-info mx-1"
        style="float: right;"
        @click="subs()"
      >-</button> </div>
    <div
      v-if="addFilling"
      class="mt-2"
    >
      <hr>
      <small
        class="text-muted ml-2"
        v-for="(option, index) in item.options"
        :key="option"
        @click="selectFilling(option, index)"
      >{{option}}</small>
      <hr>
      <small
        class="text-info ml-2"
        v-for="(option, index) in filling"
        :key="option"
        @click="remove(option, index)"
      >{{option}}</small>
    </div>
  </li>

</template>

<script>
export default {
  name: "Item",
  props: ["item", "selection"],
  data() {
    return {
      quantity: 0,
      markClicked: false,
      filling: [],
      success: false,
      standard: [1, 2, 3, 4, 5],
      addFilling: false
    };
  },
  methods: {
    order() {
      var intPrice = parseFloat(this.item.price);
      if (this.filling.includes("Garnele")) {
        intPrice += 2;
      }
      const orderItem = {
        name: this.item.name,
        price: intPrice,
        quantity: this.quantity,
        type: this.selection,
        status: "open",
        orderTime: Date.now(),
        options: this.filling
      };
      // eslint-disable-next-line
      console.log(orderItem);
      this.$store.dispatch("updateOrderItems", orderItem);
      this.item.options = this.filling.concat(this.item.options);
      this.quantity = 0;
      this.filling = [];
      this.addFilling = false;
    },
    add() {
      this.quantity++;
    },
    subs() {
      this.quantity--;
    },
    // select filling
    selectFilling(option, index) {
      this.filling.push(option);
      this.item.options.splice(index, 1);
    },
    // remove filling
    remove(ingredient, index) {
      this.filling.splice(index, 1);
      this.item.options.push(ingredient);
    },
    // reset choice
    resetSuccess() {
      this.success = false;
      this.item.options = this.filling.concat(this.item.options);
      this.filling = [];
    }
  }
};
</script>