const { Database } = require("ark.db");
const db = new Database("/src/Settings/emojidb.json");
const {green} = require("../../Settings/emojidb.json")

module.exports = {
  conf: {
    aliases: [],
    name: "alencia-emojikur",
    owner: true,
  },

  run: async (client, message, args) => {
    const emojis = [
      { name:"erkek", url:"https://cdn.discordapp.com/emojis/875742014224887819.gif?"},
      { name:"kiz" , url:"https://cdn.discordapp.com/emojis/875742048794320956.gif?"},
      { name: "miniicon", url: "https://cdn.discordapp.com/emojis/960967127110660116.png?" },
      { name: "tac", url: "https://cdn.discordapp.com/attachments/827439712834158622/827439808544243762/tacc.gif" },
      { name: "konfeti", url: "https://cdn.discordapp.com/emojis/963724613735559208.gif?" },
      { name: "star", url: "https://cdn.discordapp.com/attachments/827439712834158622/827439871505072178/star.gif" },
      { name: "red", url: "https://cdn.discordapp.com/attachments/827439712834158622/827439875170500629/red.gif" },
      { name: "green", url: "https://cdn.discordapp.com/attachments/827439712834158622/827439878664486913/green.gif" },

      ]
    emojis.forEach(async (x) => {
      if (message.guild.emojis.cache.find((e) => x.name === e.name)) return db.set(x.name, message.guild.emojis.cache.find((e) => x.name === e.name).toString());
      const emoji = await message.guild.emojis.create(x.url, x.name);
      await db.set(x.name, emoji.toString());
      message.lineReply(`${green} **${x.name}** İsimli Emoji Başarılı Bir Şekilde eklendi sunucuya ve Verilerimde Buldum Ve Hemen Ekledim Sunucuya  [${emoji.toString()}]`);
    });
    },
  };