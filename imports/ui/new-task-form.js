import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import "./new-task-form.html";

Template.newTaskForm.events({
  "submit .new-task": (event) => {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const { target, } = event;
    const text = target.text.value;

    // Insert a task into the collection
    Meteor.call("tasksInsert", text);

    // Clear form
    target.text.value = "";
  },
});
