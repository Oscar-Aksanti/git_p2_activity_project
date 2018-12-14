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

var carole = Object.create(Contact);
carole.init("Lévisse", "Carole");
var melodie = Object.create(Contact);
melodie.init("Nelsonne", "Mélodie");

var contacts = [];
contacts.push(carole);
contacts.push(melodie);

console.log("Bienvenue dans le gestionnaire des contacts !");

console.log("Au revoir !");
