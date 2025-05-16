// Fonction de gestion de majorité (console.log)
// paramètre : age
// age superieur  : "Vous êtes majeur"
// age égal à 18 : "Vous êtes tout juste majeur"
// age inferieur à 18 : "Vous êtes mineur"
function checkMajority(age) {
  if (age > 18) {
    console.log("Vous êtes majeur");
  } else if (age === 18) {
    console.log("Vous êtes tout juste majeur");
  } else {
    console.log("Vous êtes mineur");
  }
}

// Fonction qui renvoie le nom du jour selon un numero fourni en paramètre
// exemple : 1 -> "Lundi"
function getDayName(number) {
  switch (number) {
    case 1:
      return "Lundi";
    case 2:
      return "Mardi";
    case 3:
      return "Mercredi";
    case 4:
      return "Jeudi";
    case 5:
      return "Vendredi";
    case 6:
      return "Samedi";
    default:
      return "Dimanche";
  }
}

// Fonction qui affiche les nombres de 1 à 10 avec une boucle for
function displayNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// Fonction qui compte de 5 à 1 avec une boucle while
function countDown() {
  let i = 5;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

// Fonction jeu : l'utilsateur doit deviner un nombre secret entre 1 et 10
// While et if / else
function guessNumber(secretNumber) {
  let userGuess;

  while (userGuess !== secretNumber) {
    userGuess = parseInt(prompt("Devinez le nombre entre 1 et 10 :"));

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      console.log("Veuillez entrer un nombre valide entre 1 et 10.");
    } else if (userGuess < secretNumber) {
      console.log("Trop bas !");
    } else if (userGuess > secretNumber) {
      console.log("Trop haut !");
    } else {
      console.log("Bravo ! Vous avez deviné le nombre.");
    }
  }
}


// Affiche les nombres de 1 à 10 et indique s'ils sont pairs ou impairs
function showEvenOdd() {
  for (let i = 1; i <= 10; i++) {
    i % 2 === 0 ? console.log(i + " est pair") : console.log(i + " est impair");
  }
}

// Fonction qui simule une connexion
// l'utilisateur à 3 tentatives pour deviner un mot de passe
function login(password) {
  const correctPassword = "password123";
  let attempts = 0;

  for (attempts = 0; attempts < 3; attempts++) {
    if (password === correctPassword) {
      console.log("Connexion réussie !");
      return true;
    } else {
      console.log("Mot de passe incorrect. Essayez à nouveau.");
      attempts++;
    }
  }
  return false;
}

// Fonction qui vérifie si un nombre est parfait
// un nombre parfait est un nombre qui est égal à la somme de ses diviseurs
// Exemple : 6 est un nombre parfait car 6 = 1 + 2 + 3
function isPerfectNumber(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) sum += i;
  }
  return sum === number;
}

 