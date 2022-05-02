const { green, red } = require("../../Settings/emojidb.json")
const conf = require("../../Settings/Permissions.json")
module.exports = {
    conf: {
      aliases: ["tagsay"],
      name: "tagsay",
      help: "tagsay"
    },
  
run: async (client, message, args, embed) => {
if(!conf.sahipRolu.some(oku => message.member.roles.cache.has(oku)) && !conf.sahipRolu.some(oku => message.member.roles.cache.has(oku)) && !message.member.hasPermission('ADMINISTRATOR')) { message.channel.send(`${red} Hata : Yetkin Bulunmamatakdır.`).then(x=>x.delete({timeout:5000}))
message.react(red)
return }
const tag = args.slice(0).join(" ") || conf.tag;
const memberss = message.guild.members.cache.filter((member) => member.user.username.includes(tag) && !member.user.bot);
let atilacak = `Kullanıcı adında **${tag}** tagı olan **${memberss.size}** kişi bulunuyor: \n${memberss.map((member) => `${member} - \`${member.id}\``).join("\n") || `${tag} taglı kullanıcı yok`}`;
for (var i = 0; i < Math.floor(atilacak.length / 2000); i++) {
message.channel.send(embed.setDescription(atilacak.slice(0, 2000)));
atilacak = atilacak.slice(2000);
}
if (atilacak.length > 0) message.channel.send(embed.setDescription(atilacak));
},
};
    
    
  
  