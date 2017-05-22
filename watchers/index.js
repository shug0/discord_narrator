const _ = require('lodash')

module.exports = (client, channel, voiceConnection) => {

  client.on('voiceStateUpdate', (oldmember, newMember) => {

      if (newMember.voiceChannelID === channel.id) {
        console.log(`${newMember.user.username} vient de se connecter au canal General.`)

        const dispatcher = voiceConnection.playFile('./sounds/hello.mp3')
        dispatcher.setVolume(0.5)
      }

      //console.log('newMember', _.pick(newMember, ['voiceChannelID']))

  })
}
