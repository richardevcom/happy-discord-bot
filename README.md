
# Happy Discord Bot

**Happy 🦄 Bot is a Discord multipurpose bot with an attitude. It's based on Discord.js (😐 obviously), Node.js, MongoDB and Express.js**

![Happy](https://github.com/richardevcom/happy-discord-bot/raw/happy-main/animated.gif)

## Requirements

- `git` command line ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed
- `node` [Version 14 or 16 required](https://nodejs.org)
- The node-gyp build tools. This is a pre-requisite for Enmap, but also for a **lot** of other modules. See [The Enmap Happy Discord](https://enmap.evie.codes/install#pre-requisites) for details and requirements for your OS. Just follow what's in the tabbed block only, then come back here!

You also need your bot's token. This is obtained by creating an application in
the [Developer section](https://discord.com/developers) of discord.com. Check the [first section of this page](https://#/getting-started/the-long-version.html)
for more info.

## Intents

Happy Discordbot uses intents which are required as of October 7, 2020.
You can enable privileged intents in your bot page
(the one you got your token from) under `Privileged Gateway Intents`.

By default Happy DiscordBot needs the Guilds, Guild Messages and Direct Messages intents to work.
For join messages to work you need Guild Members, which is privileged.
User counts that Happy DiscordBot has in places such as in the ready log, and the stats
command may be incorrect without the Guild Members intent.

Intents are loaded from your config, and will get created by the setup scripts.

For more info about intents checkout the [official Discord.js guide page](https://discordjs.guide/popular-topics/intents.html) and the [official Discord docs page](https://discord.com/developers/docs/topics/gateway#gateway-intents).

## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

`git clone https://github.com/richardevcom/Happy Discord/happy-discord-bot.git`

Once finished:

- In the folder from where you ran the git command, run `cd happy-discord-bot` and then run `npm install`
- **If you get any error about python or msibuild.exe or binding, read the requirements section again!**

Run `node setup.js` to generate a proper configuration file and settings.

## Starting the bot

To start the bot, in the command prompt, run the following command:
`node index.js`

## Inviting to a guild

To add the bot to your guild, you have to get an oauth link for it.

You can use this site to help you generate a full OAuth Link, which includes a calculator for the permissions:
[https://finitereality.github.io/permissions-calculator/?v=0](https://finitereality.github.io/permissions-calculator/?v=0)
