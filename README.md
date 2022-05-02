# Registery-Main-Bots

# Açıklama :
Bu Altyapı Registery Botu kısmı için kodlanmıştır. Projede MIT lisansı olduğundan kimse bu projeyi ticaret amaçlı kullanamaz. ve lütfen boş yapmayınız Teşekkürler <3 iyi kodlamalar , iyi günler. :)
# Kurulum :
Öncelikle token kısmını `alencia.js` degil arkadaşlar Settings Klasörünün içinde `Guild.json'na` yazıcaksınız Bu botta mongo.db oldugu için bu bot için özel bir mongo db olması gerekmektedir. Ve Settings klasörünün içinde diyer `log.json , Permissions.json , emojidb.json` doldurarak botun bütün kurulumlarını ayarlamış olursunuz Örnegin;

# Guild.json Kurulum :
```js
{
  "token": "TOKENİNİNİZİ GİRİNİZ",
  "prefix": ["PREFİXSİNİZ"],
  "status":"BOTUN AKTİFLİGİ STATUSU YANİ",
  "guildID": "SUNUCUNUZUN IDSİ",
  "mongoUrl": "DEDİGİM GİBİ MONGO DB GEREKİYOR",
  "owners": ["BOTUN SAHİBİNİN IDSİ"],
  "botDurum": "Alencia ❤️",//Botun Durumunda Çıkıcak yazı
  "registerPerm": "Registery Permi"
}
```
