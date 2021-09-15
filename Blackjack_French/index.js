let joueur = {
    nom : "John",
    solde : 200
}

let cartes = []
let somme = 0
let estVivant = false
let avoirBlackjack = false
let message = ""

let messageEl = document.getElementById("message-el")
let cartesEl = document.getElementById("cartes-el")
let sommeEl = document.getElementById("somme-el")

let joueuerEl = document.getElementById("joueur-el")
joueuerEl.textContent = joueur.nom + ": $" + joueur.solde

function trouverCarteAleatoire() {
    let nombreAleatoire = Math.floor(Math.random() * 13) + 1
    if (nombreAleatoire > 10) {
        return 10
    }
    else if (nombreAleatoire === 1) {
        return 11
    }
    else {
        return nombreAleatoire
    }
}
function demarerJeu() {
    avoirBlackjack = true
    let premierNombre  = trouverCarteAleatoire()
    let secondNombre = trouverCarteAleatoire()
    cartes = [premierNombre, secondNombre]
    somme = premierNombre + secondNombre
    renderGame()
}
function renderGame () {
    cartesEl.textContent = "Cartes: "
    for (let i = 0 ; i < cartes.length; i++) {
        cartesEl.textContent += cartes[i] + " "
    }
    sommeEl.textContent = "somme: " + somme 
    if (somme <= 20 ) {
        message = "Voulez-vous une nouvelle carte ?"
    }
    else if (somme === 21) {
        message = "Woooh! Vous avez Blackjack"
        avoirBlackjack = true
    }
    else {
        message = "Vous etes hors jeu !"
        estVivant = true
    }
    messageEl.textContent = message
}
function nouvelleCarte () {
    if (avoirBlackjack === false && estVivant === true) {
        let carte = trouverCarteAleatoire()
        sum += carte
        cards.push(carte)
        console.log(cartes)
        renderGame()
    }
}