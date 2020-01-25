class Number {
    /**
     * Choisit un nombre au hasard entre deux bornes
     * @constructor
     * @param {Object} parametres
     * @param {Number} parametres.min - Borne minimale
     * @param {Number} parametres.max - Borne maximale
     */
    rndm(parametres) {
        return Math.random() * (parametres.max - parametres.min) + parametres.min;
    }
}

module.exports = Number;
