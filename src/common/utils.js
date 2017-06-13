const path   = require('path')
const moment = require('moment')

module.exports = {
  // SOUNDS UTILS
  getSound: (name) => path.join(process.cwd(), 'src', 'assets', 'sounds', name),

  registerAudioPlayer: (fileToPlay, options, client, voiceConnection) => {

    const dispatcher = voiceConnection.playArbitraryInput(fileToPlay, options)

    client.on('message', msg => {
      if (msg.content.includes('/stop')) dispatcher.destroy()
    })

    dispatcher.on('end', () => dispatcher.destroy())

    dispatcher.on('debug', reason => this.log(reason))
  },

  // LOGGING UTILS
  log: (message) => console.log(`${moment().format('MMMM Do YYYY, h:mm:ss a')} || ${message}`)

}
