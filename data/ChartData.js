export default [{
    name: 'series1',
    data: [10,20,15,10,20,10,10],
    sum: [10,20,15,10,20,10,10].reduce((partialSum, a) => partialSum + a, 0)
  }
]
console.log("Helo")