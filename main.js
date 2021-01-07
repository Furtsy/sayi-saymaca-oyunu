const Discord = require("discord.js");
const client = new Discord.Client();


client.conf = {
"token": "token",
"oynuyor": "düt",
"durum": "online"
}


client.on("message", async(message) => {
if(message.author.bot) return;
let kanal = client.channels.cache.get('kanalid')
if(message.channel.id !== kanal.id) return;

kanal.messages.fetch({ limit: 2 }).then(messages => {
let ilksay = parseInt(messages.map(a => a.content)[1])
let sayi = Math.floor(ilksay + 1)
let sonsay = parseInt(message.content)

if(isNaN(sonsay)) return  message.channel.send('sayı yazmalısın..').then(msg => {
                msg.delete({ timeout: 5000})
                message.delete()
            })

if(sonsay !== sayi) return  message.channel.send('sayı düzenini bozmasan mı ne').then(msg => {
                msg.delete({ timeout: 5000})
                message.delete()
            })
                  })
})

client.on("ready", () => {
  console.log(`${client.user.username} ismi ile Discord hesabı aktifleştirildi!`);
  client.user.setStatus(client.conf.durum);
  client.user.setActivity(client.conf.oynuyor);
  console.log(`Oynuyor ayarlandı!`);
})


client.login(client.conf.token)
