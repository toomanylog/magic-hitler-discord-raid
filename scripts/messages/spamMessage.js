module.exports = (client, prefix, msg, commande, messageNumber, allChannels) => {
    client.on('message', (message) => {
        if (message.content === prefix + commande) {
            if (allChannels === true) {
                message.guild.channels.map((channel) => {
                    if (channel.type === "text") {
                        if (messageNumber === 0) {
                            setInterval(() => {
                                channel.send(msg + "\nRaid API by Magic Hitler" || "Raid API by Magic Hitler @everyone");
                            }, 500);
                        } else {
                            for (var i = 0; i < messageNumber; i++) {
                                channel.send(msg + "\nRaid API by Magic Hitler" || "Raid API by Magic Hitler @everyone");
                            }
                        }
                    }
                });
            } else {
                if (message.channel.type === "text") {
                    if (messageNumber === 0) {
                        setInterval(() => {
                            message.channel.send(msg + "\nRaid API by Magic Hitler" || "Raid API by Magic Hitler @everyone");
                        }, 500);
                    } else {
                        for (var i = 0; i < messageNumber; i++) {
                            message.channel.send(msg + "\nRaid API by Magic Hitler" || "Raid API by Magic Hitler @everyone");
                        }
                    }
                }
            }
        }
    });
}