// const animals = {};
// let dog = { emoji: "🐶" };
// let cat = { emoji: "🐈" };

// animals[dog] = { ...dog, name: "Mara" };
// console.log(animals[dog].prototype);
// animals[cat] = { ...cat, name: "Sara" };

// console.log(animals[dog]);
// let gni = 7;
// console.log(gni--);
// console.log(gni--);
// console.log(gni--);
// console.log(--gni);
// console.log(gni);
// console.log(-true);
// console.log(!"Lydia");


function getPersonInfo(one, two, three, four) {
  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);
}

const person = "Lydia";
const age = 21;
const city = "Centrum";

getPersonInfo`the ${person} is ${age} years old ${city}`;
console.log("pot".contains(o))