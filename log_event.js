const EventEmitter = require("events");
const fsPromise = require("fs").promises;
const { v4: uuid } = require("uuid");
const { format } = require("date-fns");
const directory = require("./directory");

const appFs = new directory();
class AppEmitter extends EventEmitter {
  async log_to_file(message) {
    const _date = format(new Date(), "yyyy-MM-dd").toString();
    const _time = format(new Date(), "HH:mm:ss").toString();
    const log_msg = "DATE:".concat(_date, "\tTIME:", _time, "\t", message);
    console.log(log_msg);
    const folder = appFs.get_path_name().concat("/logs");
    await fsPromise.mkdir(folder);
    await fsPromise.appendFile(folder.join("logs.txt"), log_msg);
  }
}

module.exports = AppEmitter;
