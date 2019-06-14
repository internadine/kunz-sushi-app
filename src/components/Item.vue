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
        @click="remove(index, item)"
      > {{item}} </small> </div>
    <div class="p-2 bd-hightlight">
      <select
        class="form-control"
        @change="order"
        v-model="quantity"
      >
        <option disabled> 0</option>
        <option
          v-for="(number, index) in standard"
          :key="index"
        >{{number}}</option>

        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">6</option>
        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">7</option>
        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">8</option>
        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">9</option>
        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">10</option>
        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">11</option>
        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">12</option>
        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">13</option>
        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">14</option>
        <option v-if="item.name ==='Nigiri' || item.name === 'Temaki' || item.name === 'Roses'">15</option>

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
        @click="selectFilling(option, index)"
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
      success: false,
      standard: [1, 2, 3, 4, 5]
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
      this.quantity = 0;
    },
    selectFilling(option, index) {
      this.filling.push(option);
      this.item.options.splice(index, 1);
    },
    remove(index, ingredient) {
      this.filling.splice(index, 1);
      this.item.options.push(ingredient);
    },
    resetSuccess() {
      this.success = false;
      this.item.options = this.filling.concat(this.item.options);
      this.filling = [];
    }
  }
};
</script>