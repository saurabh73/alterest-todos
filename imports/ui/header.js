import { Template } from "meteor/templating";
import Tasks from "../api/tasks";
import "./header.html";

Template.header.helpers({
  incompleteCount() {
    return Tasks.find({ checked: { $ne: true, }, }).count();
  },
  dateToday() {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const today = new Date();
    return today.toLocaleDateString("en-US", options);
  },
});
