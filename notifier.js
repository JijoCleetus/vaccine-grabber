const desktopNotify = require("node-notifier");
class Notifier {
  constructor(response) {
    this.notify(response);
  }
  notify(response) {
    return (async () => {
      return new Promise((resolve) => {
        console.log(response.message);
        if (response.available) {
          desktopNotify.notify({
            title: "Vacconation Availability",
            message: response.message,
          });
        }
        resolve("Success!");
      });
    })();
  }
}
module.exports = Notifier;
