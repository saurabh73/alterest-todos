import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import { ReactiveDict } from "meteor/reactive-dict";

import Tasks from "../api/tasks";
import "./header";
import "./task";
import "./new-task-form";

import "./body.html";

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe("tasks");
});

Template.body.helpers({
  tasks() {
    const instance = Template.instance();
    if (instance.state.get("hideCompleted")) {
      // If hide completed is checked, filter tasks
      return Tasks.find(
        { checked: { $ne: true, }, },
        { sort: { createdAt: -1, }, }
      );
    }
    // Otherwise, return all of the tasks
    return Tasks.find({}, { sort: { createdAt: -1, }, });
  },
});

Template.body.events({
  "change .hide-completed input": (event, templateInstance) => {
    templateInstance.state.set("hideCompleted", event.target.checked);
  },
});
