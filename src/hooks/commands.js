const utils = require ('../common/utils.js')

const playCommands = {
  "je te cherche": utils.getSound('tu-sais-depuis-combien-de-temps-je-te-cherche.mp3'),
  "se poser": utils.getSound('ne-moublier-pas-quand-vient-le-moment-de-se-poser.mp3'),
  "votre bourse": utils.getSound('votre-bourse-est-trop-vide.mp3'),
  "darude": utils.getSound('darude.mp3'),
}

module.exports = (client, channel, voiceConnection) => {
    client.on('message', msg => {

      if (msg.content.includes('/play ')) {
        const toPlay = msg.content.replace('/play ', '')
        const fileToPlay = playCommands[toPlay]

        if (fileToPlay) {
          const dispatcher = voiceConnection.playArbitraryInput(fileToPlay, { volume: 0.7 })
          utils.registerAudioPlayer(client, dispatcher)
        }
        else {
          msg.reply('Je ne connais pas ce dicton mon prince.')
        }
      } // msg.content

    }); //client.on('message')
} //module.exports
