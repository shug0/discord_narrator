const utils = require ('../common/utils.js')

module.exports = (client, channel, voiceConnection) => {
  client.on('voiceStateUpdate', (oldmember, newMember) => {
      // If the user is connected to General now
      if (newMember.voiceChannelID === channel.id) {
        // Log in console
        utils.log(`${newMember.user.username} vient de se connecter au canal General.`)
        // Play the hello.mp3 in the voice channel
        utils.registerAudioPlayer(utils.getSound('hello.mp3'), { volume: 0.3 }, voiceConnection)
      }
  })
}
