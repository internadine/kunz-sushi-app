<template>
  <div class="container  text-center mt-5">

    <canvas
      id="line-chart"
      width="400"
      height="400"
    ></canvas>

  </div>
</template>

<script>
import db from "../firebaseinit";
import Chart from "chart.js";
import _ from "lodash";
import moment from "moment";

export default {
  name: "Sushi",
  data() {
    return {
      labels: [],
      data: []
    };
  },
  created() {
    var chartData = [];

    db.collection("NewHistory")
      .orderBy("orderTime", "asc")
      .get()
      .then(res => {
        res.forEach(doc => {
          var order = {
            week: moment(doc.data().orderTime).week(),
            name: doc.data().name,
            quantity: parseInt(doc.data().quantity),
            price: parseFloat(doc.data().price)
          };
          chartData.push(order);
        });
      })
      .then(() => {
        // consolidate all items and add quantity
        chartData = _.chain(chartData)
          .map(items => ({
            week: items.week,
            pricePerLine: parseFloat(_.multiply(items.quantity, items.price))
          }))
          .groupBy("week")
          .map(items => ({
            week: items[0].week,
            total: _.sumBy(items, "pricePerLine")
          }))
          .value();

        // get two arrays

        var labels = _.map(chartData, items => items.week);
        var data = _.map(chartData, items =>
          parseFloat(items.total).toFixed(2)
        );

        // Bar chart
        new Chart(document.getElementById("line-chart"), {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Umsatz in Euro",
                borderColor: "#990000",
                data: data,
                fill: false
              }
            ]
          },
          options: {
            legend: { display: false },
            title: {
              display: true,
              text: "Umsatz (Gesamt) pro Kalenderwoche"
            }
          }
        });
      });
  }
};
</script>

<style scoped>
.thead {
  background-color: #5bc0de;
}
</style>