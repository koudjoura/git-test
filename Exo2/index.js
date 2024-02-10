const etudiants = [
    { nom: 'Ahmat', notes: [20, 18, 19, 12] },
    { nom: 'Oumar', notes: [17, 18, 20, 13, 15] },
    { nom: 'Aminata', notes: [17, 12, 14, 15, 13] },
    { nom: 'Marc', notes: [2, 3, 5, 8, 9] },
    { nom: 'Doudou', notes: [18, 17, 18, 19, 12] }
];

 
document.getElementById('resultats').innerHTML = genererTableauHTML(etudiants);
