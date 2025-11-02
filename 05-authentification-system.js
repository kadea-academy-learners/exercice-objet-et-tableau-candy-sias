// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.

const baseDeDonnees = [];

// Fonction d'inscription
function signUp(nom, email, password, confirmPassword) {
  // Vérifie si les mots de passe correspondent
  if (password !== confirmPassword) {
    return "Erreur: les mots de passe ne correspondent pas";
  }

  // Vérifie si l'email existe déjà
  const userExiste = baseDeDonnees.find(user => user.email === email);
  if (userExiste) {
    return "Erreur: cet email existe déjà";
  }

  // Crée l'utilisateur
  const nouvelUtilisateur = {
    id: baseDeDonnees.length + 1,
    nom,
    email,
    password,
    estConnecte: false,
    estBloque: false
  };

  baseDeDonnees.push(nouvelUtilisateur);
  return nouvelUtilisateur;
}

function login(email, password) {
  const user = baseDeDonnees.find(u => u.email === email);
  if (!user) return "Erreur: utilisateur non trouvé";
  if (user.estBloque) return "Erreur: utilisateur bloqué";
  if (user.password !== password) return "Erreur: mot de passe incorrect";

  user.estConnecte = true;
  return user;
}

console.log(signUp("Alice", "alice@mail.com", "1234", "1234"));
console.log(signUp("Bob", "bob@mail.com", "abcd", "abcd"));
console.log(login("alice@mail.com", "1234"));


module.exports = { baseDeDonnees, signUp, login };
