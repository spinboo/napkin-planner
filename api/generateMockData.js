/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
*/

var jsf = require("json-schema-faker");
var mockDataSchema = require("./mockDataSchema");
var fs = require("fs");

jsf.resolve(mockDataSchema).then(sample => {
  fs.writeFile("./api/db.json", JSON.stringify(sample), function(err) {
    if (err) {
      // eslint-disable-next-line no-console
      return console.log(err);
    } else {
      // eslint-disable-next-line no-console
      console.log("Mock data generated");
    }
  });
});
