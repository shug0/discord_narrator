const _      = require('lodash')
const path   = require('path')
const moment = require('moment')

module.exports = (client, channel, voiceConnection) => {

  require('./commands.js')(client, channel, voiceConnection)

  const helloFile = path.join(process.cwd(), 'src', 'assets', 'sounds', 'hello.mp3')

  client.on('voiceStateUpdate', (oldmember, newMember) => {
      if (newMember.voiceChannelID === channel.id) {

        console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} || ${newMember.user.username} vient de se connecter au canal General.`)
        voiceConnection.playArbitraryInput(helloFile, { volume: 0.3 })
      }
  })


}
