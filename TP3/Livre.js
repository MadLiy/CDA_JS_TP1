class Livre {
    constructor(titre, auteur, annee) {
        this.titre = titre;
        this.auteur = auteur;
        this.annee = annee;
        this.id = Date.now().toString();
    }

    afficherInfos() {
        return `${this.titre} - ${this.auteur} (${this.annee})`;
    }

    toJSON() {
        return {
            type: 'Livre',
            titre: this.titre,
            auteur: this.auteur,
            annee: this.annee,
            id: this.id
        };
    }

    static fromJSON(data) {
        return new Livre(data.titre, data.auteur, data.annee);
    }
}

class LivreNumerique extends Livre {
    constructor(titre, auteur, annee, tailleFichier) {
        super(titre, auteur, annee);
        this.tailleFichier = tailleFichier;
    }

    afficherInfos() {
        return `${super.afficherInfos()} - ${this.tailleFichier} Mo`;
    }

    toJSON() {
        return {
            type: 'LivreNumerique',
            titre: this.titre,
            auteur: this.auteur,
            annee: this.annee,
            id: this.id,
            tailleFichier: this.tailleFichier
        };
    }

    static fromJSON(data) {
        return new LivreNumerique(data.titre, data.auteur, data.annee, data.tailleFichier);
    }
}

class LivrePapier extends Livre {
    constructor(titre, auteur, annee, nombrePages) {
        super(titre, auteur, annee);
        this.nombrePages = nombrePages;
    }

    afficherInfos() {
        return `${super.afficherInfos()} - ${this.nombrePages} pages`;
    }

    toJSON() {
        return {
            type: 'LivrePapier',
            titre: this.titre,
            auteur: this.auteur,
            annee: this.annee,
            id: this.id,
            nombrePages: this.nombrePages
        };
    }

    static fromJSON(data) {
        return new LivrePapier(data.titre, data.auteur, data.annee, data.nombrePages);
    }
}