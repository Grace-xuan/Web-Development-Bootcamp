//jshint eversion: 6

// exports is the shortcut for module.exports
exports.getDate = function () {
  const today = new Date();
  const options = {
    day: "numeric",
    month: "long",
    weekday: "long"
  }
  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    // month: "short",
    // day: "numeric"
  }
  return today.toLocaleDateString("en-US", options);
}

/* another format */

// module.exports.getDate = getDate;
// module.exports.getDay = getDay;
//
// function getDate() {
//   let today = new Date();
//   let options = {
//     day: "numeric",
//     month: "long",
//     weekday: "long"
//   }
//   return today.toLocaleDateString("en-US", options);
// }
//
// function getDay() {
//   let today = new Date();
//   let options = {
//     weekday: "long",
//     // month: "short",
//     // day: "numeric"
//   }
//   return today.toLocaleDateString("en-US", options);
// }
