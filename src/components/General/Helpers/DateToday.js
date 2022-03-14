import React from "react";

const DateToday = () => {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear().toString().slice(-2);
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  var today = month + "/" + day + "/" + year;
  return today;
};

export default DateToday;
