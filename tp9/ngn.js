function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=5; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function affichagetab2(){
    var X=prompt("combien de ligne?")
    document.write("<table border=2px width=30%");
    for(let i=0; i<=X-1; i++){
        document.write("<tr><td>"+(i+1)+"</td><td>*</td><td>*</td></tr>")
    }
    document.write("</table>")
}

function seconnecter(){
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin")
    {document.write("Bienvenue : "+login);}
    else {alert("Accès refusé")}
}

function seconnecter3(){
    i=0;
    do{
    var login=prompt("Donnez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="admin" && password=="admin")  
        {document.write("Bienvenue : "+login);break;}
    else {alert("Accès refusé"); i+=1;} 
    }
    while(i<3)
    if (i==3){alert("Delai dépassé")}
}

function cdc(){
    var chaine=prompt("Donner un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaine contient "+chaine.length+"caractere"+"<br>");
    document.write("La premiere lettre est "+chaine.substr(0,1)+"<br>")
}

function seconnecter2(){
    {window.location.href="login.html"}
}

function login(){
    var login=document.getElementById("t1").value;
    var mdp=document.getElementById("t2").value;
    if (login=="admin" && mdp=="admin")
        {window.location.href="yes.html"}  
    else {window.location.href="no.html"}  
}
function annuler(){
    var login=document.getElementById("t1").value='';
    var mdp=document.getElementById("t2").value='';
}

function ligne() 
{window. location. href="ajout.html"} 
    
    
function ajouterLigne(){
     var a=document.getElementById("t1").value; 
     var b=document.getElementById("t2").value; 
     if(a==""||b==""){alert("Un ou 2 champs vide");}
     else if((Number(b)<10||Number(b)>99)){alert("Âge invalide");}
     else{ 
        var table=document.getElementById("myTable"); 
        var newRow=table.insertRow(-1); 
        var cell1=newRow.insertCell(0); 
        var cell2=newRow.insertCell(1); 
        cell1.innerHTML=document.getElementById("t1").value; 
        cell2.innerHTML=document.getElementById("t2").value;
     }
    }

    function bonus() {
        var articles = [];
        var prixTTC = 0;
    
        while (true) {
            var nom = prompt("Entrez le nom de l'article :");
            var prix = parseFloat(prompt("Entrez le prix de " + nom + " :"));
            var quantite = parseInt(prompt("Entrez la quantité de " + nom + " :"));
    
            if (isNaN(prix) || isNaN(quantite) || prix <= 0 || quantite <= 0) {
                alert("Valeur invalide, veuillez réessayer.");
                continue;
            }
    
            var total = prix * quantite;
            prixTTC += total;
    
            articles.push({ nom: nom, prix: prix, quantite: quantite, total: total });
    
            var continuer = prompt("Voulez-vous ajouter un autre article ? (oui/non)").toLowerCase();
            if (continuer !== "oui") break;
        }
    
        articles.forEach(function (article) {
            document.write("<p>Article : " + article.nom + "</p>");
            document.write("<p>Prix : " + article.prix + "€</p>");
            document.write("<p>Quantité : " + article.quantite + "</p>");
            document.write("<p>Total : " + article.total + "€</p><hr>");
        });
    
        document.write("<h2>Prix TTC : " + prixTTC + "€</h2>");
    }