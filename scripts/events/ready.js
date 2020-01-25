module.exports = (client) => {
    const log = message => console.log(message);
    const t = require('timestamp-to-date');
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function bot(client) {
        if (client.user.bot) {
            return 'Bot'
        } else {
            return 'Compte utilisateur'
        }
    }

    function admin(guild) {
        if (guild.me.hasPermission('ADMINISTRATOR')) {
            return 'Oui'
        } else {
            return 'Non'
        }
    }


    client.on('ready', () => {
        log(`Informations :
    ${client.user.tag} ; ${client.user.id}
    ${bot(client)} créé le ${t(client.user.createdTimestamp, 'dd/mm/yyyy HH:MM:ss')}
    ${client.users.size} utilisateurs sur ${client.guilds.size} serveurs
    https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=-1&scope=bot`);
        rl.question('Afficher une invitation pour chacun de ces serveurs ? (y/n)\n', (answer) => {
            if (answer === 'y') {
                log(`
    ${client.guilds.map(guild => {
        if (guild.me.hasPermission('CREATE_INSTANT_INVITE')) {
            findChannel();
            function findChannel() {
                const channel = guild.channels.random()
                if (!channel) return findChannel();
                if (channel.type !== 'text') return findChannel();
                channel.createInvite().then(invite => {
                    log(`
    ${guild.name}
        Membres : ${guild.memberCount}
        Salons : ${guild.channels.size}
        Rôles : ${guild.roles.size}
        Administrateur : ${admin(guild)}
        Invitation : https://discord.gg/${invite.code}`);
            })
        }}})}`);
            }
            rl.close();
        });
    });
}
