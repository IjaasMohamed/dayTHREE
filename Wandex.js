function Holiday(destination, price) {
  this.destination = destination;
  this.price = price;
}
Holiday.prototype.info = function () {
  console.log(`${this.destination}`);
  console.log(`${this.price}`);
};
const netherlands = new Holiday("NaiPahara", 32);
console.log(netherlands);
