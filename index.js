const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`Connecté avec ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.content.startsWith('&say ')) {
    const text = message.content.slice(5);
    message.channel.send(text);
  } else if (message.content.startsWith('&embedsay ')) {
    const text = message.content.slice(10);
    const embed = new Discord.MessageEmbed()
      .setDescription(text)
      .setColor('#0099ff');
    message.channel.send({ embeds: [embed] });
  }
});

client.login('Ton Token');
