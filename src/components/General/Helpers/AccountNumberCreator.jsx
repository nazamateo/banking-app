import React from "react";

var getFromLocalStorage = JSON.parse(localStorage.getItem("userdetails"));
var accountNumCount = getFromLocalStorage.length

export default accountNumCount