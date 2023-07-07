const os = require("os");

console.log("Server log");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

export class OS {
  get_os_type = () => os.type();
  get_os_version = () => os.version();
  get_os_homedir = () => os.homedir();
}
