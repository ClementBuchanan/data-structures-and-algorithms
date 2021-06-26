function Path(cities) {
  this.cities = cities;
  this.order = new Array(cities.length);
  for (let i = 0; i < cities.length; i++) this.order[i] = i;
  this.distances = new Array(cities.length * cities.length);
  for (let i = 0; i < cities.length; i++)
    for (let j = 0; j < cities.length; j++)
      this.distances[j + i * cities.length] = distance(cities[i], cities[j]);
}
Path.prototype.change = function (temp) {
  let i = this.randomPos(),
    j = this.randomPos();
  let delta = this.delta_distance(i, j);
  if (delta < 0 || Math.random() < Math.exp(-delta / temp)) {
    this.swap(i, j);
  }
};
Path.prototype.size = function () {
  let s = 0;
  for (let i = 0; i < this.cities.length; i++) {
    s += this.distance(i, (i + 1) % this.cities.length);
  }
  return s;
};
Path.prototype.swap = function (i, j) {
  let tmp = this.order[i];
  this.order[i] = this.order[j];
  this.order[j] = tmp;
};
Path.prototype.delta_distance = function (i, j) {
  let jm1 = this.index(j - 1),
    jp1 = this.index(j + 1),
    im1 = this.index(i - 1),
    ip1 = this.index(i + 1);
  let s =
    this.distance(jm1, i) +
    this.distance(i, jp1) +
    this.distance(im1, j) +
    this.distance(j, ip1) -
    this.distance(im1, i) -
    this.distance(i, ip1) -
    this.distance(jm1, j) -
    this.distance(j, jp1);
  if (jm1 === i || jp1 === i) s += 2 * this.distance(i, j);
  return s;
};
Path.prototype.index = function (i) {
  return (i + this.cities.length) % this.cities.length;
};
Path.prototype.access = function (i) {
  return this.cities[this.order[this.index(i)]];
};
Path.prototype.distance = function (i, j) {
  return this.distances[this.order[i] * this.cities.length + this.order[j]];
};
// Random index between 1 and the last position in the array of cities
Path.prototype.randomPos = function () {
  return 1 + Math.floor(Math.random() * (this.cities.length - 1));
};

/**
 * Solves the following problem:
 *  Given a list of cities and the distances between each pair of cities,
 *  what is the shortest possible route that visits each point exactly
 *  once and returns to the origin point?
 *
 * @param {Point[]} cities The cities that the path will have to visit.
 * @param {Number} [temp_coeff=0.999] changes the convergence speed of the algorithm: the closer to 1, the slower the algorithm and the better the solutions.
 * @param {Function} [callback=] An optional callback to be called after each iteration.
 *
 * @returns {Number[]} An array of indexes in the original array. Indicates in which order the different cities are visited.
 *
 * @example
 * let cities = [
 *       new salesman.Point(2,3)
 *       //other cities
 *     ];
 * let solution = salesman.solve(cities);
 * let ordered_cities = solution.map(i => cities[i]);
 * // ordered_cities now contains the cities, in the order they ought to be visited.
 **/
function solve(cities, temp_coeff, callback) {
  let path = new Path(cities);
  if (cities.length < 2) return path.order; // There is nothing to optimize
  if (!temp_coeff)
    temp_coeff = 1 - Math.exp(-10 - Math.min(cities.length, 1e6) / 1e5);
  let has_callback = typeof callback === "function";

  for (
    let temperature = 100 * distance(path.access(0), path.access(1));
    temperature > 1e-6;
    temperature *= temp_coeff
  ) {
    path.change(temperature);
    if (has_callback) callback(path.order);
  }
  return path.order;
}

// Represents a point in two dimensions.

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function distance(p, q) {
  let dx = p.x - q.x,
    dy = p.y - q.y;
  return Math.sqrt(dx * dx + dy * dy);
}

if (typeof module === "object") {
  module.exports = {
    solve: solve,
    Point: Point,
  };
}
