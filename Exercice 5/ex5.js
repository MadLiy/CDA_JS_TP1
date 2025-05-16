// Fonction qui crée un objet représentant une personne avec les propriétés : nom, prenom, age, profession
// et retourne l'objet
function createPerson(nom, prenom, age, profession) {
  return {
    nom: nom,
    prenom: prenom,
    age: age,
    profession: profession,
  };
}

// Fonction qui affiche proprement les propriétés d’un objet passé en paramètre
function displayObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) console.log(key + ": " + obj[key]);
  }
}

// Fonction qui ajoute une nouvelle propriété à un objet
// exemple : {a: 1, b: 2} et "c" -> 3 -> {a: 1, b: 2, c: 3}
function addProperty(obj, key, value) {
  obj[key] = value;
  return obj;
}

// Fonction qui vérifie si une propriété existe dans un objet
// exemple : {a: 1, b: 2} et "a" -> true
function hasProperty(obj, key) {
  return obj.hasOwnProperty(key);
}

// Fonction qui retourne le nombre total de propriétés dans un objet
// exemple : {a: 1, b: 2} -> 2
function countProperties(obj) {
  let count = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) count++;
  }
  return count;
}

// Fonction qui fusionne deux objets en un seul (les clés du second objet écrasent celles du premier en cas de doublon)
// exemple : {a: 1, b: 2} et {b: 3, c: 4} -> {a: 1, b: 3, c: 4}
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// Fonction qui retourne un tableau contenant toutes les valeurs d’un objet
// exemple : {a: 1, b: 2} -> [1, 2]
function getObjectValues(obj) {
  const values = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      values.push(obj[key]);
    }
  }
  return values;
}
 