module.exports = (client, prefix, commande, parametres) => {
    client.on('message', message => {
        if (message.content === prefix + commande) {
            for (var i = 0; i < parametres.rolesNumber; i++) {
                if (message.guild.roles.size > 250) return;
                message.guild.createRole({
                        name: parametres.rolesName,
                        color: 'RANDOM',
                        permissions: 0
                    })
                    .catch(console.error);
            }
        }

    })
}