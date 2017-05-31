module.exports = (client, channel, voiceConnection) => {
  require('./commands.js')(client, channel, voiceConnection)
  require('./voiceStateUpdate.js')(client, channel, voiceConnection)
}
