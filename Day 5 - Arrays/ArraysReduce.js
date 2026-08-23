const responseTimes = [450, 120, 800, 250, 90];

const totalResponseTime = responseTimes.reduce((sum, time) => sum + time,0);
console.log(totalResponseTime);