
const email = require("./lib/email");
const emailService = require('./lib/email')(credentials)
emailService.send(email, "Hood River tours on sale today!",
"Get 'em while they're hot!")
