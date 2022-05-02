const client = global.client;
const { Collection } = require("discord.js");
const inviterSchema = require("../KayitData/inviter");
const inviteMemberSchema = require("../KayitData/inviteMember");
const gorev = require("../KayitData/invite");
const ayar = require("../Settings/Permissions.json")
const log = require("../Settings/Log.json")
const {konfeti,red,green} = require("../Settings/emojidb.json")
const moment = require("moment");


module.exports = async (member) => {
  let guvenilirlik = Date.now()-member.user.createdTimestamp < 1000*60*60*24*7;
  if (guvenilirlik) {
  if(ayar.fakeAccRole) member.roles.set([ayar.fakeAccRole]).catch();
  } else if(ayar.unregRoles) member.roles.add(ayar.unregRoles).catch();
  if (member.user.username.includes(ayar.tag)) { member.setNickname(`${ayar.tag} İsim Yaş`).catch(); }
  else { member.setNickname(`${ayar.ikinciTag} İsim | Yaş`).catch();}
  

  let memberGün = moment(member.user.createdAt).format("DD");
  let memberTarih = moment(member.user.createdAt).format("YYYY HH:mm:ss");
  let memberAylar = moment(member.user.createdAt).format("MM").replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık");
  let üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
    

  const channel = member.guild.channels.cache.get(log.invLogChannel);
  const kayitchannel = member.guild.channels.cache.get(log.teyitKanali);
  const kurallar = member.guild.channels.cache.get(log.kurallar);
  if (!channel) return;
  if (member.user.bot) return;

  const gi = client.invites.get(member.guild.id).clone() || new Collection().clone();
  const invites = await member.guild.fetchInvites();
  const invite = invites.find((x) => gi.has(x.code) && gi.get(x.code).uses < x.uses) || gi.find((x) => !invites.has(x.code)) || member.guild.vanityURLCode;
  client.invites.set(member.guild.id, invites);

if (invite === member.guild.vanityURLCode){ 
kayitchannel.wsend(`
<a:darkheaven3:964846353891065908> Merhabalar ${member}  aramızda hoş geldin. Seninle beraber sunucumuz **${üyesayısı}** üye sayısına ulaştı. 

Hesabın açılış süresi ${memberGün} ${memberAylar} ${memberTarih}  ${guvenilirlik ? `Şüpheli! ${red}` : `Güvenli! ${green}` } Olarak Belirlendin

Sunucumuza kayıt olduğunda ${kurallar} kanalına göz atmayı unutmayınız. Kayıt olduktan sonra kuralları okuduğunuzu 

kabul edeceğiz ve içeride yapılacak cezalandırma işlemlerini bunu göz önünde bulundurarak yapacağız.

**Seni Davet eden:** Sunucu Özel URL ${konfeti}${konfeti}${konfeti}`);
channel.wsend(`
${green} ${member} sunucumuza katıldı,**Seni Davet eden:** Sunucu Özel URL ${konfeti}${konfeti}${konfeti}
`)
}
if (!invite.inviter) return;
await inviteMemberSchema.findOneAndUpdate({ guildID: member.guild.id, userID: member.user.id }, { $set: { inviter: invite.inviter.id, date: Date.now() } }, { upsert: true });
if (Date.now() - member.user.createdTimestamp <= 1000 * 60 * 60 * 24 * 7) {
await inviterSchema.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { total: 1, fake: 1 } }, { upsert: true });
const inviterData = await inviterSchema.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
const total = inviterData ? inviterData.total : 0;
kayitchannel.wsend(`
<a:darkheaven3:964846353891065908> Merhabalar ${member}  aramızda hoş geldin. Seninle beraber sunucumuz **${üyesayısı}** üye sayısına ulaştı. 

Hesabın ${memberGün} ${memberAylar} ${memberTarih}  ${guvenilirlik ? `Şüpheli! ${red}` : `Güvenli! ${green}` } Tarihinde oluşmuş

Sunucumuza kayıt olduğunda ${kurallar} kanalına göz atmayı unutmayınız. Kayıt olduktan sonra kuralları okuduğunuzu 

kabul edeceğiz ve içeride yapılacak cezalandırma işlemlerini bunu göz önünde bulundurarak yapacağız.

Sunucumuza katıldı fakat hesabı 7 günden önce açıldığı için şüpheli kısmına atıldı. ${red}
`);
channel.wsend(`
${green} ${member} sunucumuza katıldı Davet Eden: ${invite.inviter.tag} Toplam Davet Sayısı: **${total}** 
`)
member.roles.set([ayar.fakeAccRole])//Katılan Kullanıcı İd:\`${member.id}\`
} else {
await inviterSchema.findOneAndUpdate({ guildID: member.guild.id, userID: invite.inviter.id }, { $inc: { total: 1, regular: 1 } }, { upsert: true });
const inviterData = await inviterSchema.findOne({ guildID: member.guild.id, userID: invite.inviter.id });
const total = inviterData ? inviterData.total : 0;
kayitchannel.wsend(`
<a:darkheaven3:964846353891065908> Merhabalar ${member}  aramızda hoş geldin. Seninle beraber sunucumuz **${üyesayısı}** üye sayısına ulaştı. 

Hesabın ${memberGün} ${memberAylar} ${memberTarih}  ${guvenilirlik ? `Şüpheli! ${red}` : `Güvenli! ${green}` } Tarihinde oluşmuş

Sunucumuza kayıt olduğunda ${kurallar} kanalına göz atmayı unutmayınız. Kayıt olduktan sonra kuralları okuduğunuzu 

kabul edeceğiz ve içeride yapılacak cezalandırma işlemlerini bunu göz önünde bulundurarak yapacağız.

Seni Davet Eden : ${invite.inviter.tag}. ${total} davet ${konfeti}${konfeti}${konfeti} `);

channel.wsend(`
${green} ${member} sunucumuza katıldı,Davet Eden: ${invite.inviter.tag} Toplam Davet Sayısı: **${total}**
`)
}
};

module.exports.conf = {
  name: "guildMemberAdd",
};