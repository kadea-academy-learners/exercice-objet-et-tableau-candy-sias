// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(users) {
	// Vérifie que le paramètre est bien un tableau
	if (!Array.isArray(users)) {
		return "Erreur : le paramètre doit être un tableau d'utilisateurs.";
	}

	// On crée un tableau vide pour stocker les noms des admins
	const admins = [];

	// Parcourons le tableau
	for (let i = 0; i < users.length; i++) {
		const user = users[i];

		// Vérifions si l'utilisateur est admin
		if (user.estAdmin === true) {
			admins.push(user.nom);
		}
	}

	// On retourne la liste finale
	return admins;
}
console.log(whoIsAdmin([
  { nom: "Alice", age: 18, estAdmin: true },
  { nom: "Bob", age: 20, estAdmin: true },
  { nom: "Sandy", age: 16, estAdmin: false }
]))

module.exports = {
	whoIsAdmin,
};


