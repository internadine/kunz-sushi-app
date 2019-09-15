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
  created() {
    var chartData = [];

    db.collection("NewHistory")
      .where("type", "==", "done-sushi")
      .get()
      .then(res => {
        res.forEach(doc => {
          var order = {
            week: moment(doc.data().orderTime).week(),
            waitTime: moment
              .duration(doc.data().doneTime - doc.data().orderTime)
              .minutes()
          };
          chartData.push(order);
        });
      })
      .then(() => {
        // consolidate all items and add quantity
        chartData = _.chain(chartData)
          .groupBy("week")
          .map(items => ({
            week: items[0].week,
            total: parseInt(_.sumBy(items, "waitTime")),
            number: items.length
          }))
          .value();

        // get two arrays

        var labels = _.map(chartData, items => items.week);
        var data = _.map(chartData, items =>
          parseInt(items.total / items.number)
        );

        // Bar chart
        new Chart(document.getElementById("line-chart"), {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Durchschnitt",
                borderColor: "#990000",
                data: data,
                fill: false
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: " Wartezeit in Minuten "
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