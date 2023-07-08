const os = require("os");
const path = require("path");
const appOS = require("./os");
const appEmitter = require("./log_event");
// const v: Console;
console.log("Server log");

const a = new appOS();
const em = new appEmitter();
// console.log(a.get_os_version());

em.on("log", (msg) => {
  em.log_to_file("A message");
});

setInterval(() => {
  em.emit("log");
}, 3000);
// console.log(em);
