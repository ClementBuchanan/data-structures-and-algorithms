const edges = {
  AB: 10,
  AC: 15,
  AD: 20,
  BA: 10,
  BC: 12,
  BD: 11,
  CA: 13,
  CB: 22,
  CD: 24,
  DA: 33,
  DB: 25,
  DD: 43,
};

let totalCities = 4;
let recordDistance;
let bestEver;

function setup() {
  for (let i = 0; i < totalCities; i++) {
    let vertices = ["A", "B", "C", "D"];
    cities[i] = vertices;
  }

  let dist = calcDistance(cities);
  recordDistance = dist;
  bestEver = cities.slice();
}

function draw() {
  let A = floor(random(cities.length));
  let B = floor(random(cities.length));
  let C = floor(random(cities.length));
  let D = floor(random(cities.length));

  swap(cities, A, B, C, D);

  let dist = calcDistance(cities);
  if (dist < recordDistance) {
    recordDistance = dist;
    bestCity = cities.slice();
  }
}

//shuffling the array
function swap(arr, A, B, C, D) {
  let temp = arr[A];
  arr[A] = arr[B];
  arr[C] = arr[D];
  arr[D] = temp;
}

function totalCost(points) {
  let cost = 0;
  for (let i = 0; i < edges.length - 1; i++) {
    let price = cost(points[i].edges, points[i + 1].edges);
    cost += price;
  }
}
return totalCost;
