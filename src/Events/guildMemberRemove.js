const client = global.client;
const inviterSchema = require("../KayitData/inviter");
const inviteMemberSchema = require("../KayitData/inviteMember");
const conf = require("../Settings/Permissions.json")
const {konfeti,red} = require("../Settings/emojidb.json")
const log = require("../Settings/Log.json")
module.exports = async (member) => {
  const channel = member.guild.channels.cache.get(log.invLogChannel);
  if (!channel) return;
  if (member.user.bot) return;

  const inviteMemberData = await inviteMemberSchema.findOne({ guildID: member.guild.id, userID: member.user.id });
  if (!inviteMemberData) {
    channel.wsend(`

    ${red} <@${member.user.id}> Sunucumuzdan ayrıldı ama kim tarafından davet edildiğini bulamadım

    `);
  } else {
    const inviter = await client.users.fetch(inviteMemberData.inviter);
    await inviterSchema.findOneAndUpdate({ guildID: member.guild.id, userID: inviter.id }, { $inc: { leave: 1, total: -1 } }, { upsert: true });
    const inviterData = await inviterSchema.findOne({ guildID: member.guild.id, userID: inviter.id, });
    const total = inviterData ? inviterData.total : 0;
    channel.wsend(`

    ${red} <@${member.user.id}> Sunucumuzdan ayrıldı. ${inviter.tag} Tarafından davet edilmişti. ${total} daveti kaldı

    `);
  }
};

module.exports.conf = {
  name: "guildMemberRemove",
};