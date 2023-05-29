function remplirTableauAleatoire() {
    let tableau = [];
    for (var i = 0; i < 30; i++) {
        tableau.push(Math.floor(Math.random() * 100) + 1);
    }
    return tableau;
}

export default remplirTableauAleatoire