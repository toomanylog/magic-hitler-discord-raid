module.exports = (client, prefix, commande) => {
    client.on('message', (message) => {
        if (message.content === prefix + commande) {
            message.channel.delete()
                .catch(console.error);
        }
    });
}