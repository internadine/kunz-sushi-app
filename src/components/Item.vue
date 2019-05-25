<template>

  <li
    v-if="item.type == selection"
    class="list-group-item text-left"
  >
    <div
      class="alert alert-info alert-dismissible fade show"
      role="alert"
      v-if="success"
    >
      Gemerkt!
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        @click="resetSuccess"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div
      class="p-2 bd-highlight"
      style="color: #990000"
    >{{item.name}} <small class="text-info ml-3"> {{item.price}}
        Euro </small></div>
    <div
      v-if="item.options"
      class="p-2 bd-highlight text-muted"
    > mit
      <small
        class="ml-4 text-info"
        v-for="(item, index) in filling"
        :key="index"
        @click="remove(index)"
      > {{item}} </small> </div>
    <div class="p-2 bd-hightlight">
      <select
        class="form-control"
        @change="order"
        v-model="quantity"
      >
        <option disabled> 0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

    </div>

    <div
      class="p-2 bd-highlight text-info"
      v-if="item.options"
    >

      <small
        class="ml-4 text-muted"
        v-for="(option, index) in item.options"
        :key="index"
        @click="selectFilling(option)"
      >
        {{option}} </small>

    </div>

  </li>

</template>

<script>
export default {
  name: "Item",
  props: ["item", "selection"],
  data() {
    return {
      attachBG: false,
      quantity: 0,
      markClicked: false,
      filling: [],
      success: false
    };
  },
  methods: {
    order() {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      var time = today.getHours() + ":" + today.getMinutes();
      var dateTime = date + " " + time;
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
        orderTime: dateTime,
        options: this.filling
      };
      // eslint-disable-next-line
      console.log(orderItem);
      this.$store.dispatch("updateOrderItems", orderItem);
      this.success = true;
      this.filling = [];
      this.quantity = 0;
    },
    selectFilling(option) {
      this.filling.push(option);
    },
    remove(index) {
      this.filling.splice(index, 1);
    },
    resetSuccess() {
      this.success = false;
    }
  }
};
</script>