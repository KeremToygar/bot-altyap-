const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message,args) => {
  const yardimembed = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username}`, client.user.avatarURL)
  .setColor('RANDOM')
  .setTitle(`${client.user.username} | Yardım Komutunu Kullandı.`)
  .setDescription(`Sunucum (discord.gg/xrzH38pXDu)`) 
  .addField("Komutlar:", `\
    \nkomut = -emojiler, -duyuru, -kanalismideğiş, \n-kullanıcı-bilgi, -rol-bilgi, -sunucu-bilgi, -ping
    \nModerasyon = \n-ban, -kick, -poll, \n-sil, -yaz, -Çekiliş, -Oylama
    \nEğlence = -ascii, -tkm, -yazı-tura.`)
  message.channel.send(yardimembed)
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ["yardim", "help", "y", "h"], 
  permLevel: 0
}
exports.help = {
  name: "yardım",
  description: "yardım komutudur", 
  usage: "yardım"
}
