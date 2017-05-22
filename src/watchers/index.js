const _    = require('lodash')
const path = require('path')

module.exports = (client, channel, voiceConnection) => {

  client.on('voiceStateUpdate', (oldmember, newMember) => {

      if (newMember.voiceChannelID === channel.id) {
        console.log(`${newMember.user.username} vient de se connecter au canal General.`)

        const dispatcher = voiceConnection.playFile(path.join(process.cwd(), 'src', 'assets', 'sounds', 'hello.mp3'))
        dispatcher.setVolume(0.5)
      }

      //console.log('newMember',_.pick(newMember, ['voiceChannelID']))
  })
}
