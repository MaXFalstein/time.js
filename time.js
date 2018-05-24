var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();
var milliseconds = d.getMilliseconds();
var colon = ":";
var HMSColonTime = hours.concat(colon).concat(minutes).concat(colon).concat(seconds);
var HMSMsColonTime = hours.concat(colon).concat(minutes).concat(colon).concat(seconds).concat(colon).concat(milliseconds);
