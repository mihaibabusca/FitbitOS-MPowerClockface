import clock from "clock";
import document from "document";
import locale from "user-settings";

import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
let timeLabel = document.getElementById("timeLabel");

// Update the <text> element with the current time
function updateClock() {
  let today = new Date();
  let hours = today.getHours();
  let mins = util.zeroPad(today.getMinutes());

  timeLabel.text = `${hours}:${mins}`;
}

// Update the clock every tick event
clock.ontick = () => updateClock();

