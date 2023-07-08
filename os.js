const os = require("os");

class OS {
  get_os_type = () => os.type();
  get_os_version = () => os.version();
  get_os_homedir = () => os.homedir();
}

module.exports = OS;
