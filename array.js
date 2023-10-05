var city = ["Delhi", "Chennai", "Hydrabad"];
//push==> adding elements at the end of an array
console.log(city.push("Banglore"));
console.log(city);

//pop ==> remove elements at the end of an array
console.log(city.pop());
console.log(city);

//unshift ==>adding elements at start of an array
console.log(city.unshift("kolkata"));
console.log(city);

//shift ==> remove elements at start of an array
console.log(city.shift());
console.log(city);

//slice ==> slice(startIndex,endIndex)

console.log(city.slice(0));
console.log(city.slice(0, 3));
console.log(city.slice(0, -2));
console.log(city.slice(-2, -1));
console.log(city.slice(-1, -2)); // here the output is empty arrry because startIndex value should be gerater than endIndex value.

//splice  ==> splice(startIndex,deletCount, value)

var city1 = [
  "Delhi",
  "Chennai",
  "Banglore",
  "Hydrabad",
  "Kolkata",
  "Chandigarh",
];

console.log(city1.splice(2, 2)); //["Banglore", "Hydrabad"]
console.log(city1);

console.log(city1.splice(3, 0, "Paris", "Pune"));

console.log(city1); //['Delhi', 'Chennai', 'Kolkata', 'Chandigarh', 'Paris', 'Pune']

console.log(city1.splice(-5, 2, "Vizag")); // ['Chennai', 'Kolkata']

console.log(city1); // ['Delhi', 'Vizag', 'Chandigarh', 'Paris', 'Pune']

//reverse

var result = city1.reverse();
console.log(result);

//join

var msg = ["Have", "a", "good", "Day"];
var res = msg.join("/");
console.log(res);

//split

var gitlink = "http://127.0.0.1:5500/githubexample/index.html";
console.log(gitlink.split("/"));

//flat

var num = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

console.log(num.flat(0));

console.log(num.flat(1));

console.log(num.flat(2));

console.log(...num);

//map => transform the data || used to iterate an array
//always return same length of an array
// used to apply logic(add,sub, mul, div)

var arr = [1, 2, 3, 4, 5];

// function double(n) {
//     return n * 2
// }

const output = arr.map((n) => n * 2);
console.log(output);

var vel = arr.map((item) => `<p>${item}</p>`);
console.log(vel);

const out = arr.map((x) => x.toString(2));
console.log(out);
