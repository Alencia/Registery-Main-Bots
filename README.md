# Registery-Main-Bots

# 💥 Açıklama :
Bu Altyapı Registery Botu kısmı için kodlanmıştır. Projede MIT lisansı olduğundan kimse bu projeyi ticaret amaçlı kullanamaz. ve lütfen boş yapmayınız Teşekkürler <3 iyi kodlamalar , iyi günler. 

# Önemli :
Projeyi kurduktan sonra terminale `npm i discord.js` yazmayı unutmayın!! Önemle Ve Şiddetle Arz Ederim..

# 🔨 Kurulum :
Öncelikle token kısmını `alencia.js` degil arkadaşlar Settings Klasörünün içinde `Guild.json'na` yazıcaksınız Bu botta mongo.db oldugu için bu bot için özel bir mongo db olması gerekmektedir. Ve Settings klasörünün içinde diyer `log.json , Permissions.json , emojidb.json` doldurarak botun bütün kurulumlarını ayarlamış olursunuz Örnegin;

# 🎉 Guild.json Kurulum :
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

# 🎉 Log.json Kurulum :
```js
{
    "kayitlog":"Bir Kullanıcıyı Kayıt Ettikten Sonra Log Giden mesaj",
    "chatChannel": "Kayıt Edildikten Sonra Giden mesaj Sunucunun Chatin Mesajı",
    "teyitKanali": "Hoşgeldin mesajının gelicegi yer",
    "TagLogAldi": "tag aldıgı zaman loga gidicek mesaj",
    "invLogChannel": "invite davet mesajının gidicegi kanal ıdsi",
    "botses": "Botun sese Idsi",
    "SesTeyit":"Sesteyit kanalının ıdsi",
    "kurallar": "Kuralların odsi"
  
}
```

# 🎉 Permissions.json Kurulum :
```js
{
  "tag": "Tagınız",
  "ikinciTag": "• İkinci Tagınız",
  "EtiketTag":"Etiket Tagınız",
  "vipRole":"Vip Rolü",
  "erkekRolleri": ["Erkek Rolü 1","Erkek Rolü 2"],
  "kizRolleri": ["Kız Rolü 1","Kız Rolü 2"],
  "teyitciRolleri": ["Registery perm"],
  "ekipRolu": ["Tag rolü"],
  "sahipRolu": ["sahip rolü"],
  "unregRoles": ["Kayıtsız Rolü"],
  "boosterRolu": "Boost Rolü",
  "fakeAccRole":"Şüpheli Rlü"
}
```

# 🎉 emojidb.json Kurulum :
```js
{
Burası Yukarıdakileri yaptıktan sonra botun `emojikur.js` var onu sunucuda `.alencia-emojikur` diyerek veya degiştirebilirsiniz onu yaptıktan sonra otomatik buraya düşüyor. Ve emoji çekebilirsiniz burdan yaptıgınız komutlara
}
```

# Admin Komutları
```js
1.Emojikur
2.eval
3.isim-reset
4.ping
5.reload
6.rolsüz
7.taglı-alım
```
# Sunucu Komutları
```js

1.Yetkili Say
2.say
3.tagsay
```
# staff Komutları
```js
1.günlükinfo
2.yardım
3.isimler
4.teyit-stat
5.vip
```
