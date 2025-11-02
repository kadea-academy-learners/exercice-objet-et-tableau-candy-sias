// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".

function showStudentBulletin(eleves) {
	// Vérifie que c’est un tableau
	if (!Array.isArray(eleves)) {
		return "Erreur : le paramètre doit être un tableau d'élèves.";
	}

	// Tableau vide pour stocker les bulletins
	const bulletins = [];

	// On parcourt chaque élève
	for (let i = 0; i < eleves.length; i++) {
		const eleve = eleves[i];

		// Si l'élève n’a pas de notes ou tableau vide → moyenne = 0
		let moyenne = 0;
		if (Array.isArray(eleve.notes) && eleve.notes.length > 0) {
			let somme = 0;
			for (let j = 0; j < eleve.notes.length; j++) {
				somme += eleve.notes[j];
			}
			moyenne = somme / eleve.notes.length;
		}

		// Arrondir à deux décimales
		moyenne = Number(moyenne.toFixed(2));

		// Déterminer le commentaire
		let commentaire = "";
		if (moyenne >= 16) {
			commentaire = "Excellent";
		} else if (moyenne >= 14) {
			commentaire = "Très Bien";
		} else if (moyenne >= 12) {
			commentaire = "Bien";
		} else if (moyenne >= 10) {
			commentaire = "Passable";
		} else {
			commentaire = "À revoir";
		}

		// Créer le bulletin pour cet élève
		const bulletin = {
			nom: eleve.nom,
			moyenne: moyenne,
			commentaire: commentaire
		};

		// Ajouter au tableau final
		bulletins.push(bulletin);
	}

	// Retourner le résultat complet
	return bulletins;
}
console.log(showStudentBulletin([
	{ nom: "Alice", notes: [18, 16, 15] },
	{ nom: "Bob", notes: [8, 9, 10] },
	{ nom: "Sandy", notes: [] }
]));

module.exports = {
	showStudentBulletin,
};