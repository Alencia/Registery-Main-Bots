const conf = require("../../Settings/Permissions.json")
const { red,miniicon } = require("../../Settings/emojidb.json")
module.exports = {
  conf: {
    aliases: ["say"],
    name: "say",
    help: "say"
  },

run: async (client, message, args, embed) => {
if(!conf.teyitciRolleri.some(oku => message.member.roles.cache.has(oku)) && !conf.sahipRolu.some(oku => message.member.roles.cache.has(oku)) && !message.member.hasPermission('ADMINISTRATOR')) 
{
message.react(red)
return
}
let Tag = conf.tag 
var TotalMember = message.guild.memberCount 
let tag = await message.guild.members.cache.filter(member => member.user.username.includes(Tag)).size 
let sesli = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b);
var boost = message.guild.premiumSubscriptionCount;
var boostlevel = message.guild.premiumTier;

message.lineReply(embed
.setColor('RANDOM')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setDescription(`
${miniicon} Sunucumuz da **${message.guild.memberCount}** kullanıcı Bulunmakta.
${miniicon} Sunucumuz da **${message.guild.members.cache.filter(member => member.presence.status !== "offline").size}** aktif üye bulunmakta
${miniicon} Sunucumuz da **${tag}** Taglı  kullanıcı Bulunmakta 
${miniicon} Sunucumuz da **${boost}** (\`${boostlevel}. lvl\`) takviye bulunmakta.
${miniicon} Sunucumuz da **${sesli}** kişi seslide.
`))},
};
