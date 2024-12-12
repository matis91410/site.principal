// Fonction pour ajouter une nouvelle ligne
function ajouter() {
    var a = document.getElementById("t1").value;  // Valeur du champ "Article"
    var b = document.getElementById("t2").value;  // Valeur du champ "Quantité"
    var c = document.getElementById("t3").value;  // Valeur du champ "Prix Unité"

    // Ajout d'une nouvelle ligne dans la table
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(-1);  // Insertion à la fin du tableau

    // Insertion des cellules dans la nouvelle ligne
    var cell1 = newRow.insertCell(0); 
    var cell2 = newRow.insertCell(1); 
    var cell3 = newRow.insertCell(2); 
    var cell4 = newRow.insertCell(3);

    // Remplissage des cellules avec les valeurs des champs
    cell1.innerHTML = '<input type="text" value="' + a + '" onchange="calculerTotal(this)">';
    cell2.innerHTML = '<input type="number" value="' + b + '" min="1" onchange="calculerTotal(this)">';
    cell3.innerHTML = '<input type="number" value="' + c + '" step="0.01" onchange="calculerTotal(this)">';
    cell4.innerHTML = '<input type="text" value="' + (b * c).toFixed(2) + '" readonly>';

    // Réinitialisation des champs après ajout de la ligne
    document.getElementById("t1").value = ""; 
    document.getElementById("t2").value = "1"; 
    document.getElementById("t3").value = "0.00"; 

    // Recalculer les totaux après l'ajout d'une ligne
    calculer();
}

// Fonction pour calculer les totaux
function calculer() {
    var table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    var sousTotal = 0;
    var taxe = 0;
    var remise = parseFloat(document.getElementById("remise").innerText);
    var livraison = 10;  // Coût fixe de livraison

    // Parcourir toutes les lignes sauf l'en-tête
    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");

        // Récupérer les valeurs de la quantité et du prix unitaire
        var quantity = parseFloat(cells[1].getElementsByTagName("input")[0].value);
        var unitPrice = parseFloat(cells[2].getElementsByTagName("input")[0].value);

        // Calcul du total pour chaque ligne
        var total = quantity * unitPrice;
        cells[3].getElementsByTagName("input")[0].value = total.toFixed(2);  // Mettre à jour la cellule "Total"

        sousTotal += total;
    }

    // Calcul de la taxe (20% du sous-total)
    taxe = sousTotal * 0.20;
    
    // Calcul du total avec la remise et la taxe
    var total = sousTotal + taxe - remise + livraison;  // Ajouter la livraison

    // Mise à jour des valeurs dans le HTML
    document.getElementById("soustotal").innerText = sousTotal.toFixed(2);
    document.getElementById("taxe").innerText = taxe.toFixed(2);
    document.getElementById("Livraison").innerText = livraison.toFixed(2);  // Afficher la livraison
    document.getElementById("total").innerText = total.toFixed(2);
}

// Fonction pour recalculer le total d'une ligne spécifique
function calculerTotal(input) {
    var row = input.closest('tr');
    var quantity = parseFloat(row.cells[1].getElementsByTagName("input")[0].value);
    var unitPrice = parseFloat(row.cells[2].getElementsByTagName("input")[0].value);

    // Calcul du total pour la ligne spécifique
    var total = quantity * unitPrice;
    row.cells[3].getElementsByTagName("input")[0].value = total.toFixed(2);

    // Recalculer les totaux après modification d'une ligne
    calculer();
}

// Fonction pour réinitialiser tous les champs et valeurs
function Reintialiser() {
    // Réinitialiser tous les champs de saisie
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "1";
    document.getElementById("t3").value = "0.00";
    document.getElementById("t4").value = "0.00";
    
    
    // Réinitialiser les valeurs de la facture
    document.getElementById("soustotal").innerText = "0.00";
    document.getElementById("taxe").innerText = "0.00";
    document.getElementById("total").innerText = "0.00";
    document.getElementById("remise").innerText = "15";  // Remise par défaut
    document.getElementById("Livraison").innerText = "10.00";  // Livraison par défaut

    // Réinitialiser la table (supprimer les lignes)
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 1; i--) {
        table.deleteRow(i);
    }
}
