import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import * as feather from "feather-icons";
import { formatDistance } from "date-fns";
import "./task.html";

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
  taskDate() {
    return formatDistance(this.createdAt, new Date(), {
      addSuffix: true,
    });
  },
});

Template.task.events({
  "click .toggle-checked"() {
    // Set the checked property to the opposite of its current value
    Meteor.call("tasksSetChecked", this._id, !this.checked);
  },
  "click .delete"() {
    Meteor.call("tasksRemove", this._id);
  },
  "click .toggle-private"() {
    Meteor.call("tasksSetPrivate", this._id, !this.private);
  },
});

Template.task.onRendered(() => {
  feather.replace({ height: "16px" });
});
