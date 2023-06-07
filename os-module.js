const os = require('os');
const user = os.userInfo();
console.log(user);

const uptime = os.uptime();
console.log(uptime);
const uptime_hours = uptime/3600;
console.log(`the system uptime is ${uptime_hours} hours`);

