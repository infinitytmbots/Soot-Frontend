let sum = [15, 10, 10, 15, 10, 10, 10].reduce((partialSum, a) => partialSum + a, 0)

export default [{
    data: {
        carbon: {
            credit: Math.floor(((205 - sum) * 12) / 1000),
            emission: sum
        },
        engine: {
            efficeny: Math.round(((205 - sum) / 205) * 100),
            humidity: "--" // This Value is sourced from the sensors
        },
        wallet: "0xA454363F6Fbd9401eA420FF05e7856C7b2c0B186"
    },
}]