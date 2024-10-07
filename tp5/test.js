function test_age(){
    let age = prompt("quelle est ton âge ?");
    if (age<18)
    {
        document.write("attention accès refusé, vous êtes mineur");
        document.body.style.backgroundColor = "red";
    }
    else
    {
        document.write("accès autorisé, vous êtes majeur");
        document.body.style.backgroundColor = "green";
    }
}
function affichage(){
    let prenom = prompt("quelle est ton prénom");
    let nom = prompt("quelle est ton nom");
    document.write("<div style='border: 5px solid blue; width:400px; height:50px; margin:auto; font-size:2em;background-color:red; color: yellow;'>");
    document.write("bonjours   " + prenom +"   "+ nom);
    document.write("</div>");
}
function test_couleur(){
    let couleur = prompt("donne une couleur")
    if ( couleur == "rouge"){
    document.body.style.backgroundColor = "red"
    }
    
    else if ( couleur == "bleu"){
    document.body.style.backgroundColor = "blue"
    }
   
   
    else if ( couleur == "jaune"){
    document.body.style.backgroundColor = "yellow"
    }

    else {
        document.write("couleur non comprise")
    }
}
function moyenne(){
    var n1 = prompt("premiere note");
    var n2 = prompt ("deuxieme note");
    var n3 = prompt ("troisieme note");

var somme = Number(n1)+Number(n2)+Number(n3);

document.write("Voici la somme : "+ somme+"<br>");
var moyenne = somme/3;

document.write("Voici la moyenne : "+ moyenne+"<br>");

if (moyenne<10)
    {
    document.write("vous êtes refusé")
    document.body.style.backgroundColor = "red";
    }
 else if (moyenne<14)
   {
    document.write("vous êtes admis bien")
    document.body.style.backgroundColor = "green";
    }
else  
    {
   document.write("vous êtes admis bien")
   document.body.style.backgroundColor = "yellow";
     }
}