// npm install moment --save
//https:momentjs.com/

import moment from "moment";

// format dates
moment().format("MMMM Do YYYY, h:mm:ss a"); // December 25th 2024, 9:57:09 am
moment().format("dddd"); // Wednesday
moment().format("MMM Do YY"); // Dec 25th 24
moment().format("YYYY [escaped] YYYY"); // 2024 escaped 2024
moment().format(); // 2024-12-25T09:57:09+01:00

// relative time
moment("20111031", "YYYYMMDD").fromNow(); // 13 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 13 years ago
moment().startOf("day").fromNow(); // 10 hours ago
moment().endOf("day").fromNow(); // in 14 hours
moment().startOf("hour").fromNow(); // an hour ago

// calendar time
moment().subtract(10, "days").calendar(); // 12/15/2024
moment().subtract(6, "days").calendar(); // Last Thursday at 9:58 AM
moment().subtract(3, "days").calendar(); // Last Sunday at 9:58 AM
moment().subtract(1, "days").calendar(); // Yesterday at 9:58 AM
moment().calendar(); // Today at 9:58 AM
moment().add(1, "days").calendar(); // Tomorrow at 9:58 AM
moment().add(3, "days").calendar(); // Saturday at 9:58 AM
moment().add(10, "days").calendar(); // 01/04/2025

//example
const minuteNow = moment().format("mm");
const tenDaysFromNow = moment().add(10, "days").calendar();
// console.log(minuteNow, tenDaysFromNow);
