# 🤵🏻 Discord Narrator
A Narrator for your Discord bot.

## Features
- Play a hello.mp3 file when someone connect to general
- Play a panel of sound when type /play registeredSound
  - You can stop the sound with /stop

## Installation
[Click here if you just want to add it to your server without modifications](https://discordapp.com/oauth2/authorize?&client_id=314725199440379904&scope=bot&permissions=0)

### Requirements
- Node 6.9x
- FFMPEG installed

```bash
git clone https://github.com/shug0/discord_narrator
cd discord_narrator
npm install
```

Rename  **src/token_example.js** in **src/token.js** and fill it with the token key of your discord bot.

Run it with `npm start`
