const conf = require("../Settings/Permissions.json")
const pref = require("../Settings/Guild.json")

module.exports = async (message) => {
  if (message.content.toLowerCase() === `${pref.prefix}tag`) {
    message.react("✅");
    message.lineReply(`\`\`${conf.tag}\`\``);
  }
};
module.exports.conf = {
  name: "message"
};
