function correction() {
    window.location.href = "reponse.html";
}

function corrige() {
    // Définition des bonnes réponses pour chaque question
    const bonnesReponses = {
        q1: ["Franz Beckenbauer", "Didier Deschamps", "Mario Zagallo"], 
        q2: "Lionel Messi",
        q3: "173", 
        q4: "31-0",
        q5: "Hongrie",
        q6: "Alfredo Di Stéfano",
        q7: "Hakan Şükür",
        q8: "Franz Beckenbauer",
        q9: "Asmir Begović",
        q10: "Casillas"
    };

    let score = 0; // Initialisation du score

    // Fonction pour comparer les réponses
    function verifierReponse(question, bonneReponse) {
        const reponseElements = document.querySelectorAll(`input[name="${question}"]:checked`); // Sélectionner les réponses cochées

        if (reponseElements.length === 0) return false; // Si aucune réponse n'est sélectionnée, retourner false

        const reponseArray = Array.from(reponseElements).map(input => input.value); // Récupérer les valeurs des réponses sélectionnées

        if (Array.isArray(bonneReponse)) {
            // Si la bonne réponse est un tableau (plusieurs réponses possibles), comparer sans tenir compte de l'ordre
            return arraysEqual(reponseArray.sort(), bonneReponse.sort());
        } else {
            // Sinon, comparer une seule réponse
            return reponseArray[0] === bonneReponse;
        }
    }

    // Fonction pour comparer deux tableaux sans tenir compte de l'ordre
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false; // Si les tailles sont différentes, ce ne sont pas les mêmes
        for (let i = arr1.length; i--; ) {
            if (arr1[i] !== arr2[i]) return false; // Vérifier si les éléments sont identiques
        }
        return true; // Si toutes les vérifications passent, les tableaux sont égaux
    }

    // Vérifier les réponses pour chaque question
    for (let i = 1; i <= 10; i++) {
        const question = `q${i}`;
        const bonneReponse = bonnesReponses[question];

        if (verifierReponse(question, bonneReponse)) {
            score++; // Si la réponse est correcte, incrémenter le score
        }
    }

    // Affichage du score final
    alert(`Votre score final est : ${score} / 10`);
}

function effacer() {
    // Récupérer toutes les cases à cocher et boutons radio
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radios = document.querySelectorAll('input[type="radio"]');
    
    // Décocher toutes les cases à cocher
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Décocher tous les boutons radio
    radios.forEach(radio => {
        radio.checked = false;
    });
}
    
