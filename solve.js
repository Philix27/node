function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function () {
  return this.name;
};
MyObject.prototype.getMessage = function () {
  return this.message;
};

// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();
//   this.getName = function () {
//     return this.name;
//   };

//   this.getMessage = function () {
//     return this.message;
//   };
// }

const val = new MyObject("Felo", "My niga");
// console.log(val.hasOwnProperty(), val.getMessage());
const arry = [1, 3, "Jake"];
const myObj = { name: "Kings", story: "evidence" };
function printObj() {
  for (ob in myObj) {
    console.log(ob, "obolo");
  }
}
printObj()
// console.log(myObj, myObj.hasOwnProperty());
