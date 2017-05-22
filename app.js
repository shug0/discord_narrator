const Discord = require('discord.js')
const client = new Discord.Client()

client.login('MzE0NzI1MTk5NDQwMzc5OTA0.C_8WMQ.cZFwXX8P9cnw-66-He8gZIixp1s')

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
