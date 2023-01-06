// Thanks lotus ;)

ship_instructor(ship, "GET SOME TIPS!\nPush [9] to regen your ship", "Zoltar");
ship_instructor(ship, "Push [0] to open the menu and use the same key to close it", "Zoltar", 5);
ship_instructor(ship, "Push [8] to become spectator the same key will be used get out of it", "Zoltar", 10);
ship_instructor(ship, "Multiple other actions can be done in the mod", "Zoltar", 16);
ship_instructor(ship, "And above all, have fun!", "Zoltar", 21, 5);

var ship_instructor = function(ship, message, character = "Lucina", delay = 0, hide_after = 0) {
  if (!ship || !message || !message.length) {return}
  let instructor_func;
  if (hide_after) {
    instructor_func = function() {
      ship.showInstructor();
      ship.instructorSays(message, character);
      setTimeout(() => { ship.hideInstructor() }, hide_after * 650);
    };
  } else {
    instructor_func = function() {
      ship.showInstructor();
      ship.instructorSays(message, character);
    };
  }
  setTimeout(instructor_func, delay * 650);
};
