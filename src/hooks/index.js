module.exports = (client, channel, voiceConnection) => {
  require('./message.js')(client, channel, voiceConnection)
  require('./voiceStateUpdate.js')(client, channel, voiceConnection)
}
