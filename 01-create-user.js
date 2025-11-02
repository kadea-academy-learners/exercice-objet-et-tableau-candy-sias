/*
Écrire une fonction "createUser" qui permet de créer un utilisateur.

La fonction doit accepter trois paramètres :
    - nom (string) : le nom de l'utilisateur
    - age (number) : l'âge de l'utilisateur
    - estConnecte (boolean) : indique si l'utilisateur est connecté

La fonction doit retourner un objet contenant ces trois propriétés :
    - nom (string)
    - age (number)
    - estConnecte (boolean)
*/

function createUser(name, age, estConnecte) {
    if (typeof name !== "string") {
        return "Erreur. Le nom est une chaîne de caractères"
    }
    
    return {
    nom: name,
    age: age,
    estConnecté: estConnecte 
  };
}
console.log(createUser("Josias", 18, true));

module.exports = {
    createUser,
};

