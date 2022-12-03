<template>
  <div>
    <VueApexCharts height="320" width="910" :options="chartOptions" :series="series" />
  </div>
</template>


<script setup>
import VueApexCharts from 'vue3-apexcharts'
const chartOptions = {
            chart: {
              type: 'area',
              toolbar: {
                show: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            fill: {
              colors: ['#FFFFFFFF', '#FFFFFFCC', '#FFFFFF00']
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
                  show: false,
                },
              },
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          };
const series = [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }];
</script>
