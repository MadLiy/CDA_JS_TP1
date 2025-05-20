class Utilisateur {
    constructor(nom) {
        this.nom = nom;
        this.idUtilisateur = Date.now().toString();
    }

    voirProfil() {
        return `Nom: ${this.nom}`;
    }

    toJSON() {
        return {
            type: 'Utilisateur',
            nom: this.nom,
            idUtilisateur: this.idUtilisateur
        };
    }

    static fromJSON(data) {
        return new Utilisateur(data.nom);
    }
}

class Membre extends Utilisateur {
    constructor(nom) {
        super(nom);
        this.livresEmpruntes = [];
    }

    emprunterLivre(livre) {
        if (!this.livresEmpruntes.some(l => l.id === livre.id)) {
            this.livresEmpruntes.push(livre);
            return true;
        }
        return false;
    }

    toJSON() {
        return {
            type: 'Membre',
            nom: this.nom,
            idUtilisateur: this.idUtilisateur,
            livresEmpruntes: this.livresEmpruntes
        };
    }

    static fromJSON(data) {
        const membre = new Membre(data.nom);
        membre.livresEmpruntes = data.livresEmpruntes.map(livre => {
            if (livre.type === 'LivreNumerique') {
                return LivreNumerique.fromJSON(livre);
            } else if (livre.type === 'LivrePapier') {
                return LivrePapier.fromJSON(livre);
            }
            return Livre.fromJSON(livre);
        });
        return membre;
    }
}

class Bibliothecaire extends Utilisateur {
    ajouterLivre(livre, bibliotheque) {
        if (!bibliotheque.some(l => l.id === livre.id)) {
            bibliotheque.push(livre);
            return true;
        }
        return false;
    }

    toJSON() {
        return {
            type: 'Bibliothecaire',
            nom: this.nom,
            idUtilisateur: this.idUtilisateur
        };
    }

    static fromJSON(data) {
        return new Bibliothecaire(data.nom);
    }
} 