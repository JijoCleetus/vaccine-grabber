const got = require("got");
const input = require("./input.json");
class Checker {
  constructor() {}
  getUrl() {
    switch (input.activeSearchBy) {
      case "district":
        return (
          input.url.district +
          "?district_id=" +
          input.district_id +
          "&date=" +
          input.date
        );
      case "pincode":
        return (
          input.url.pincode +
          "?pincode=" +
          input.pincode +
          "&date=" +
          input.date
        );
      default:
        throw Error("Option Not Found!");
    }
  }
  check() {
    return (async () => {
      const url = this.getUrl();
      const { body } = await got.get(
        url,
        {
          responseType: "json",
        }
      );
      const available = false;
      // console.log("\007");
      let message = "";
      // console.log(body);
      if (body.centers) {
        body.centers.forEach((center) => {
          if (center.sessions) {
            center.sessions.forEach((session) => {
              if (session.available_capacity > 0) {
                available = true;
              }
            });
          }
        });
        if (available) {
          message = "Vaccination Center available! at " + new Date().toString();
        } else {
          message =
            "Vaccination Center not available! at " + new Date().toString();
        }
      } else {
        message = "No Centers available! at " + new Date().toString();
      }
      return { message, available };
    })();
  }
}
module.exports = Checker;
