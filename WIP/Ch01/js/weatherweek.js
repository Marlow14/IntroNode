
const daysAndTemps = [
    { days: 'Monday', temp: 80 },
    { days: 'Tuesday', temp: 90 },
    { days: 'Wednesday', temp: 70 },
    { days: 'Thursday', temp: 65 },
    { days: 'Friday', temp: 85 },
    { days: 'Saturday', temp: 90 },
    { days: 'Sunday', temp: 100 }
];

let highestTemp = Math.max.apply(null, daysAndTemps.map(function (o) {
    return  o.temp
}));

console.log(`The highest temperature this week was ${highestTemp}`);

max = daysAndTemps.reduce(function (prev, current) { return (prev.temp > current.temp) ? prev : current
});

console.log(`The highest temperature this week was on ${max.days} and it was ${max.temp}`);

let lowestTemp = Math.min.apply(null, daysAndTemps.map(function (o) {
    return  o.temp;
}));

console.log(`The lowest temperature this week was ${lowestTemp}`);

min = daysAndTemps.reduce(function (prev, current) { return (current.temp > prev.temp) ? prev : current
});

console.log(`The highest temperature this week was on ${min.days} and it was ${min.temp}`);
