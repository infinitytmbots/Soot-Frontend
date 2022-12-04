<template>
  <div>
    <VueApexCharts :options="chartOptions" :series="series" />
  </div>
</template>


<script setup>
import VueApexCharts from 'vue3-apexcharts'
import series from "@/data/ChartData.js";

const chartOptions = {
            chart: {
              type: 'area',
              toolbar: {
                show: true
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            fill: {
              colors: ['#FFFFFFFF', '#FFFFFFCC', '#FFFFFFFF']
            },
            xaxis: {
              type: 'datetime',
              labels: {
                colors: ["#FFFFFFFF"]
              },
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            yaxis: {
              labels: {
                show: false,
              },
            },
            grid: {
              xaxis: {
                lines: {
                  show: false,
                },
              },
              yaxis: {
                lines: {
                  show: true,
                },
              },
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          };
</script>
