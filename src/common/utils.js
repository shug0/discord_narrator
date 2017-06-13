const path   = require('path')
const moment = require('moment')

module.exports = {
  // SOUNDS UTILS
  getSound: (name) => path.join(process.cwd(), 'src', 'assets', 'sounds', name),

  registerAudioPlayer: (fileToPlay, options, voiceConnection) => {
    voiceConnection.playArbitraryInput(fileToPlay, options)
  },

  // LOGGING UTILS
  log: (message) => console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} || ${message}`)

}
