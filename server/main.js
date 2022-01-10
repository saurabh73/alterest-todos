import { Meteor } from "meteor/meteor";
import "../imports/api/tasks";

Meteor.startup(() => {
  console.log(
    `Running meteor server in ${
      Meteor.isProduction ? "production" : "development"
    } mode`
  );
});
