const desktopNotify = require("node-notifier");
const GmailNotification = require("./gmail-notification");
class Notifier {
  constructor(response) {
    this.notify(response);
  }
  notify(response) {
      return new Promise((resolve) => {
        console.log(response.message);
        if (response.available) {
          desktopNotify.notify({
            title: "Vacconation Availability",
            message: response.message,
          });
        // gmail notification
        new GmailNotification().send();
        }
        resolve("Success!");
      });
  }
}
module.exports = Notifier;
