module.exports = (client, prefix, msg, commande) => {
    client.on("message", message => {
        if (message.content === prefix +commande) {
            message.channel.send(msg);
            console.log(message.content)
        }
    });
}