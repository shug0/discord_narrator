const path   = require('path')

const getFile = (name) => path.join(process.cwd(), 'src', 'assets', 'sounds', name)

const playCommands = {
  "stuga": getFile('tu-sais-depuis-combien-de-temps-je-te-cherche.mp3'),
  "darude": getFile('darude.mp3'),
}

const registerAudioPlayer = (client, dispatcher) => {
  client.on('message', msg => {

    if (msg.content.includes('/stop')) {
      dispatcher.end()
    }

  })
}

module.exports = (client, channel, voiceConnection) => {
    client.on('message', msg => {

      if (msg.content.includes('/play ')) {

        const toPlay = msg.content.replace('/play ', '')
        const fileToPlay = playCommands[toPlay]

        if (fileToPlay) {
          const dispatcher = voiceConnection.playArbitraryInput(fileToPlay, { volume: 0.2 })
          registerAudioPlayer(client, dispatcher)
        }
        else {  msg.reply('Je ne connais pas ce dicton mon prince.')  }
      }

    }); //client.on('message')
} //module.exports
