const os = require("os");

const getHour = function () {
  let currentHour = new Date();
  let dayHour = currentHour.getHours();
  return dayHour;
};

module.exports = function () {
  const name = os.userInfo().username;
  const hour = getHour();
  if (hour >= 23 && hour <= 5) {
    return `Good night, ${name}`;
  } else if (hour >= 5 && hour <= 11) {
    return `Good morning, ${name}`;
  } else if (hour >= 11 && hour <= 17) {
    return `Good day, ${name}`;
  } else if (hour >= 17 && hour <= 23) {
    return `Good evening, ${name}`;
  }
};
