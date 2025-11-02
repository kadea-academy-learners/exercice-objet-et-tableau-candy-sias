// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"


function averageNote(notes) {
	// Vérifie que c’est un tableau
	if (!Array.isArray(notes)) {
		return "Erreur : le paramètre doit être un tableau.";
	}
	// Étape 1 : calcul de la somme
	let somme = 0;
	for (let i = 0; i < notes.length; i++) {
		somme += notes[i];
	}

	// Étape 2 : calcul de la moyenne
	const moyenne = somme / notes.length;

	// Étape 3 : condition

	if (moyenne >= 10) {
		return "Réussi";
	} else {
		return "Échoué";
	}
};
console.log(averageNote([12, 8, 15, 10, 9])); // "Réussi"
console.log(averageNote([3, 4, 5, 6, 7]));    // "Échoué"

module.exports = {
	averageNote,
};