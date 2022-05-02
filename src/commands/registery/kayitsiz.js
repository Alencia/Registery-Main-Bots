const ayar = require("../../Settings/Permissions.json")
const conf = require("../../Settings/Permissions.json")
const {red,green} = require("../../Settings/emojidb.json")
const log = require("../../Settings/Log.json")

module.exports = {
  conf: {
    aliases: ["kayıtsız","ks","kayitsiz"],
    name: "kayitsiz",
    help: "kayitsiz"
  },
  run: async (client, message, args, embed, prefix) => { 
    if(!ayar.teyitciRolleri.some(rol => message.member.roles.cache.has(rol)) && !message.member.hasPermission('ADMINISTRATOR')) 
    {
      message.react(red)
    message.lineReply(`${red} Hata : Yetkin bulunmamakta.`).then(x=> x.delete({timeout: 5000})) 
    return }
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) 
    {
      message.react(red)
    message.lineReply(`${red} Hatalı Kullanım : \`\`Alencia/İD\`\``).then(x=>x.delete({timeout:5000})) 
    return }
    if (!message.member.hasPermission(8) && member.roles.highest.position >= message.member.roles.highest.position) 
    {
      message.react(red) 
    message.lineReply(`${red} Hatalı Kullanım : Kendinle aynı yetkide ya da daha yetkili olan birini kayıtsıza atamazsın! [HATA!]`).then(x=>x.delete({timeout:5000})) 
    return }
    if (!member.manageable) 
    {
      message.react(red)
    message.lineReply( `${red} Hatalı Kullanım : Bu üyeyi kayıtsıza atamıyorum! `).then(x=>x.delete({timeout:5000})) 
    return }
    message.react(red)
    member.roles.set(conf.unregRoles);
    member.setNickname(`${ayar.ikinciTag} İsim | Yaş`)
    message.lineReply(`${green} Başarılı ${member} üyesi, ${message.author} tarafından kayıtsıza atıldı!`).then(x=>x.delete({timeout:5000}))
    if(log.kayitlog && client.channels.cache.has(log.kayitlog)) client.channels.cache.get(log.kayitlog).send( embed.setColor("RED").setDescription(`${member} üyesi, ${message.author} tarafından, kayıtsıza atıldı!`));

  },
};