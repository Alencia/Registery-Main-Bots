const moment = require("moment");
require("moment-duration-format");
const { MessageEmbed } = require("discord.js");
const { MessageButton,MessageActionRow } = require('discord-buttons');
module.exports = {
    conf: {
      aliases: ["yardım","help"],
      name: "yardım",
      help: "yardım"
    },
  
run: async (client, message, args, embed, prefix) => {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;





      var AdminKomutlar = new MessageButton()
      .setID("AdminKomutlar")
      .setLabel("Admin K.")
      .setStyle("red")
      .setEmoji("952214679357374545")

      var YetkiliKomutları = new MessageButton()
      .setID("YetkiliKomutları")
      .setLabel("Yetkili K.")
      .setStyle("gray")
      .setEmoji("952214679357374545")

      var GuildKomutları = new MessageButton()
      .setID("GuildKomutları")
      .setLabel("Guild K.")
      .setStyle("blurple")
      .setEmoji("952214679357374545")

      var StaffKomutları = new MessageButton()
      .setID("StaffKomutları")
      .setLabel("Staff K.")
      .setStyle("red")
      .setEmoji("952214679357374545")

  
      const row = new MessageActionRow()
      .addComponent(AdminKomutlar)
      .addComponent(YetkiliKomutları)
      .addComponent(GuildKomutları)
      .addComponent(StaffKomutları)


embed
.setColor("RANDOM")
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setDescription(`Dünyanın En Güzel Kızı`)
.addFields(
  { name: "Admin Komutlarına Hoşgeldiniz",  value: `
\`\`\`diff
- alencia-emojikur
- eval
- isim-reset/sf (@alencia/ID)
- ping
- restart (Bot Sahibi Yapabilir)
- rolsüz ver
- taglı-alım (aç/kapat)
\`\`\`
`, inline: true }
)
let msg = await message.channel.send({ buttons : [AdminKomutlar,YetkiliKomutları,GuildKomutları,StaffKomutları], embed: embed})
var filter = (button) => button.clicker.user.id === message.author.id;

let collector = await msg.createButtonCollector(filter, { time: 99999999 })
collector.on("collect", async (button) => {

if(button.id === "YetkiliKomutları") {
await button.reply.defer()
const embeds = new MessageEmbed()
.setColor("RANDOM")
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.setDescription(`Dünyanın En Güzel Kızı`)
.addFields(
  { name: "Yetkili Komutlarına Hoşgeldiniz",  value: `
\`\`\`diff
- kayıt (@alencia/ID)
- isim (@alencia/ID)
- kayitsiz
- bağlantı-kes
\`\`\`
`, inline: true }
)
msg.edit({
embed: embeds,
components : row
})}

if(button.id === "StaffKomutları") {
  await button.reply.defer()
  const embeds = new MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`Dünyanın En Güzel Kızı`)
  .addFields(
    { name: "Staff Komutlarına Hoşgeldiniz",  value: `
\`\`\`diff
- günlük-info
- isimler (@alencia/ID)
- teyit-stat
- vip
\`\`\`
  `, inline: true }
  )
  msg.edit({
  embed: embeds,
  components : row
  })}

if(button.id === "GuildKomutları") {
  await button.reply.defer()
  const embeds = new MessageEmbed()  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  .setDescription(`Dünyanın En Güzel Kızı`)
  .addFields(
    { name: "Guild Komutlarına Hoşgeldiniz",  value: `
\`\`\`diff
- yardım
- reg-yetkili-say
- say
- vip
\`\`\`
  `, inline: true }
  )
  msg.edit({
  embed: embeds,
  components : row
  })}

if(button.id === "AdminKomutlar") {
await button.reply.defer()
msg.edit({
embed: embed,
components : row
})}
})
},
};
  
