var Contact = {
    // initialise les attributs du contact
    init: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    // Renvoie la description du contact
    decrire: function () {
        return "Nom : " + this.nom + ", prénom : " + this.prenom;
    }
};


