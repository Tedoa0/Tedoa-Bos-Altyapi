const { MessageEmbed } = require("discord.js");
const config = require('../config.json')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
let embed = new MessageEmbed().setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic : true })).setColor('RANDOM').setFooter(config.bots.footer).setTimestamp()
message.channel.send(embed.setDescription(`Ping değermi ölçüyorum lütfen bekle.`)).then(tedoa => {
    setTimeout(() => {
        tedoa.edit(embed.setDescription("Pingim: "+ client.ws.ping +" "))
    }, 7000)
    })
 }
 exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ["pong"], 
    permLevel : 0
}

exports.help = {
    name : 'ping',
    description : '',
    cooldown: 10
}