const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message,args) => {
  const yardimembed = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username}`, client.user.avatarURL)
  .setColor('RANDOM')
  .setTitle(`${client.user.username} | Yardım Komutunu Kullandı.`)
  .setDescription(`Sunucum (discord.gg/xrzH38pXDu)`) 
  .addField("Komutlar:", `\
    \nkomut = emojiler, duyuru, kanalismideğiş, \nkullanıcı-bilgi, rol-bilgi, sunucu-bilgi, ping
    \nModerasyon = \nban, kick, poll, \nsil, yaz, rastgele-kişi
    \nEğlence = ascii, tkm, yazı-tura.`)
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
