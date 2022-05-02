const fs = require("fs");
const client = global.client;

fs.readdir("./src/Events", (err, files) => {
  if (err) return console.error(err);
  files
    .filter((file) => file.endsWith(".js"))
    .forEach((file) => {
      let prop = require(`../Events/${file}`);
      if (!prop.conf) return;
      client.on(prop.conf.name, prop);
      console.log(`[ALENCİA EVENT] ${prop.conf.name} eventi yüklendi!`);
    });
});
