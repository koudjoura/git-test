const calculdemoyenn = (notes) => {
    let somme = 0;
    for (let note of notes) {
        somme += note;
    }
    return somme / notes.length;
};

const genererTableauHTML = (etudiants) => {
    let tableauHTML = '';
    for (let etudiant of etudiants) {
        const moyenne = calculdemoyenn(etudiant.notes);
        tableauHTML += `<tr><td>${etudiant.nom}</td><td>${moyenne.toFixed(2)}</td></tr>`;
    }
    return tableauHTML;
};
