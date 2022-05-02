const client = global.client;
const conf = require("../Settings/Permissions.json");
const settings = require("../Settings/Guild.json")
const log = require("../Settings/Log.json")
const penals = require("../KayitData/penals");
const {MessageEmbed} = require("discord.js")
module.exports = async () => {
//ETKİNLİK ROL ALMA
  client.guilds.cache.forEach(async (guild) => {
    const invites = await guild.fetchInvites();
    client.invites.set(guild.id, invites);
  });

let botVoiceChannel = client.channels.cache.get(log.botses); 
if (botVoiceChannel) 
botVoiceChannel.join().then(console.log(`Bot ses kanalına bağlandı!`)).catch(err => console.error("[HATA] Bot ses kanalına bağlanamadı!"));
client.user.setPresence({ activity: { name: settings.botDurum}, status: settings.status });
client.guilds.cache.get(settings.guildID).members.cache.filter(uye => uye.user.username.includes(conf.tag) && !uye.user.bot && !uye.roles.cache.has(conf.boosterRolu) && (!uye.roles.cache.has(conf.ekipRolu) || !uye.displayName.startsWith(conf.tag))).array().forEach((uye) => {
setTimeout(() => {
uye.setNickname(uye.displayName.replace(conf.ikinciTag, conf.tag));
if (conf.ekipRolu) uye.roles.add(conf.ekipRolu).catch({ })
}, 1000 * 60 * 60);
})
};


module.exports.conf = {
  name: "ready",
};