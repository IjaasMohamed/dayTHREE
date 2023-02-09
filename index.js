// let heading = document.querySelector("h1");
// heading.innerText = "php";

// console.log(document.URL);

// window.alert("Learning js");

// window.localStorage.setItem("test", "This is my test");

// window.localStorage.setItem("nTest", "This is my second test");

// window.localStorage.removeItem("test");

// // variables var   let   const

// var n = "old";
// n = "new";
// window.alert(n);

// let m = "past";
// m = "present";
// window.alert(m);

// const obj = {
//   name: "maina new",
// };

// obj.name = "maina old";

// console.log(obj.name);

// let fname = "Ijaas";
// let lname = "Fouzer";
// let age = prompt("Whats Ijaas's age mate");

// window.alert(fname + " " + lname + " and is " + age + " years old");

// //template strings

// let fname1 = "Ijaas";
// let lname2 = "Mohamed";
// let age3 = prompt("Guess Ijaas's age mate !");

// result = `${fname1}${lname2} and is ${age}`;

// alert(result);

// let test = "test one subject";
// let test1 = "test one paragraph";

// console.log(`${test} \n ${test1}

// ${test}`);

// function newFunction(user = "default user", message = "default message here") {
//   alert(`hello ${user} ${message}`);
// }

// newFunction("nai-paara", "namrooda");

// newFunction("new", "jill");

// newFunction();

// newFunction("Jav");

// function greeting(message = "black nigga") {
//   alert(`${message} hey folks and bishes`);
// }

// greeting("Niggi mate");
// greeting();

// let nGreetings = (msg) => alert(`${msg} pretty bish`);
// nGreetings("huhu");

// let nGn = (msgs,nam) => alert(`${msgs} `) , prompt{`${nam}`}
// let n = (ms, nms) => {
//     return alert(`${ms} `)
//     return prompt {`${nms}`}
// }

// let new123 = (username) => prompt(`wassup ${username}`);
// new123("g7");

// let n147 = (david, dellboi) => {
//   if (!david) {
//     throw new Error("title required");
//   }
//   if (!dellboi) {
//     throw new Error("Body required");
//   }
//   return `${david} ${dellboi}`;
// };

// alert(n147);

// function greeting(msg) {
//   return msg;
// }

// greeting("hello");

// alert(greeting("hello"));

// msg = "hel-ooooooooo";
// alert(`${msg}`);

// let kg = (abbreviated) => alert(`${abbreviated} is the meaning`);

// kg("Kerala kansa");

// let blog = (title, author) => {
//   if (!title) {
//     throw new error("Kindly enter the title" + err);
//   }
//   if (!author) {
//     throw new error(alert("please enter the author" + err));
//   }
//   return `${title} - ${author}`;
// };

// console.log(blog("Harry potter", "Nigga who wrote Harry Potter"));

// alert(blog("how to win friends and influence people", "Dale Carnegie"));

// function sayHi() {
//   console.log(this);
// }
// sayHi();

// let australia = {
//   cities: ["sydney", "adeleine", "melborne"],
//   dash: function () {
//     alert(this.cities.join(" - "));
//   },
// };
// australia.dash();

// let Canada = {
//   cities: ["vancour", "calgary", "ottawa", "montreal"],
//   withDash: function () {
//     console.log(this.cities.copyWithin(1, 3));
//   },
// };
// Canada.withDash();

// let thingsToDo = {
//   morning: "Exercise",
//   afternonn: "Work",
//   evening: "Code",
//   night: ["Sleep", "Dream", "Repeat"],
// };

// let { morning, afternonn, evening, night } = thingsToDo;

// console.log(thingsToDo.morning);

// const uniStudent = ({ fname, lname }) => {
//   console.log(`${fname} ${lname} is from the universe`);
// };
// uniStudent({
//   fname: "Ijaas",
//   lname: "Mohamed",
// });

// let phone = ({ type, price }) => {
//   console.log(`${type} ${price} will master js in 3 more days Hopefully`);
// };
// phone({ type: "Mobile - iphone", price: " 101.000.00" });

// let [, arr] = ["one", "two ", "three"];
// console.log(arr);

// const americanCities = ["Califonia", "LA", "New York"];
// const australianCities = ["Sydney", "Melbourne", "Brisbane"];

// const allCities = [...americanCities, ...australianCities];

// console.log(allCities.join(" - "));

// const Ci = ["Gampola", "Kandy", "Colombo", "Gampaha"];
// Ci.push("Kalutara");
// let [first, ...rest] = Ci;
// console.log(Ci);
// console.log("First =>" + first + " Rest=>" + rest);

// const u1 = {
//   name12: "Ryan",
//   emailly: "Rya@gmail.com",
//   password1: "JilJilJilBuk",
// };
// let { password1, ...rest } = u1;
// console.log(rest);

function Holiday(destination, price) {
  this.destination = destination;
  this.price = price;
}
Holiday.prototype.info = function () {
  console.log(`${this.destination}`);
  console.log(`${this.price}`);
};
const nepal = new Holiday("NaiPahara", 32);
