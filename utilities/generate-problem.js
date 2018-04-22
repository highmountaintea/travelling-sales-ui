// generates the dataset. For visualization purpose, we generate coordinates within 1280x720 (720p)
const Random = require('crypto-random');
 
// console.log(Random.value()); // a random float between 0 and 1. Replacement function for Math.random. 

function generate(targetNumber) {
  let occupied = {};
  let dots = [];
  while (dots.length < targetNumber) {
    // generates a dot
    let x = Random.range(0, 1279);
    let y = Random.range(0, 719);
    let dot = [x, y];
    let dotStr = JSON.stringify(dot);
    // if already exists, skip this dot
    if (occupied[dotStr]) continue;
    // otherwise add the dot
    occupied[dotStr] = true;
    dots.push(dot);
  }
  return dots;
}

console.log(JSON.stringify(generate(parseInt(process.argv[2]))));