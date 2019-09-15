<template>
  <div class="container  text-center mt-5">

    <div
      class="p-2 bd-highlight"
      style="color: #990000"
    >Welches Produkt möchtest Du auswerten? </div>

    <div class="p-2 bd-hightlight">
      <select
        class="form-control"
        v-model="selection"
        @change="getData()"
      >
        <!-- standard number of items -->
        <option value='done-sushi'>Sushi (Umsatz in Euro)</option>
        <option value='dish'>Gerichte (Umsatz in Euro)</option>
        <option value='sonstige'>Getränke ohne Alkohol (Umsatz in Euro)</option>
        <option value='bier'>Biere (Umsatz in Euro)</option>
        <option value='wein'>Wein / Sekt / Champagner (Umsatz in Euro)</option>

      </select>

    </div>

    <canvas
      id="bar-chart"
      width="400"
      height="400"
    ></canvas>

  </div>
</template>

<script>
import db from "../firebaseinit";
import Chart from "chart.js";
import _ from "lodash";

export default {
  name: "Sushi",
  data() {
    return {
      labels: [],
      data: [],
      selection: "done-sushi"
    };
  },

  created() {
    this.getData();
  },
  methods: {
    getData() {
      var chartData = [];
      db.collection("NewHistory")
        .where("type", "==", this.selection)
        .get()
        .then(res => {
          res.forEach(doc => {
            var order = {
              name: doc.data().name,
              quantity: Number(doc.data().quantity),
              price: parseFloat(doc.data().price)
            };
            chartData.push(order);
          });
        })
        .then(() => {
          // consolidate all items and add quantity
          chartData = _.chain(chartData)
            .groupBy("name")
            .map(items => ({
              name: items[0].name,
              quantity: _.sumBy(items, "quantity"),
              price: items[0].price
            }))
            .value();
          // get two arrays

          var labels = _.map(chartData, items => items.name);
          var data = _.map(chartData, items => items.quantity * items.price);

          // Bar chart
          new Chart(document.getElementById("bar-chart"), {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "Anzahl",
                  backgroundColor: "#990000",
                  data: data
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true
              },
              events: []
            }
          });
        });
    }
  }
};
</script>

<style scoped>
.thead {
  background-color: #5bc0de;
}
</style>