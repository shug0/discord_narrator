const Discord = require('discord.js')
const client = new Discord.Client()

client.login(require('./config/token.js'))

client.on('ready', () => {

  // Find & connect to the general voice channel
  client.channels.forEach(channel => {
    if (channel.type === 'voice' && channel.name === 'General') {

      channel.join().then(voiceConnection => {

        require('./watchers/index')(client, channel, voiceConnection)

      })
    }
  })
})
