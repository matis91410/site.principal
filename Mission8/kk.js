// 1. Somme de deux nombres
function addition() {
    let a = parseInt(prompt("Entrez le premier nombre :"));
    let b = parseInt(prompt("Entrez le second nombre :"));
    let somme = a + b;
    alert(`La somme de ${a} et ${b} est : ${somme}`);
}

function additiondemarche() {
    let code1 = document.getElementById('code1');
    code1.style.display = (code1.style.display === "none" || code1.style.display === "") ? "block" : "none";
    if (code1.style.display === "block") {
        code1.textContent = `
        // Exemple de code pour additionner deux nombres :
        function addition() {
            let a = parseInt(prompt("Entrez le premier nombre :"));
            let b = parseInt(prompt("Entrez le second nombre :"));
            let somme = a + b;
            alert("La somme de " + a + " et " + b + " est : " + somme);
        }
        `;
    }
}

// 2. Afficher les nombres de 1 à 10
function afficher() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }
    alert("Les nombres de 1 à 10 sont : " + result);
}

function afficherdemarche() {
    let code2 = document.getElementById('code2');
    code2.style.display = (code2.style.display === "none" || code2.style.display === "") ? "block" : "none";
    if (code2.style.display === "block") {
        code2.textContent = `
        // Exemple de code pour afficher les nombres de 1 à 10 :
        function afficher() {
            let result = "";
            for (let i = 1; i <= 10; i++) {
                result += i + " ";
            }
            alert("Les nombres de 1 à 10 sont : " + result);
        }
        `;
    }
}

// 3. Trouver le plus grand entre deux nombres
function trouver() {
    let a = parseInt(prompt("Entrez le premier nombre :"));
    let b = parseInt(prompt("Entrez le second nombre :"));
    let max = a > b ? a : b;
    alert(`Le plus grand entre ${a} et ${b} est : ${max}`);
}

function trouverdemarche() {
    let code3 = document.getElementById('code3');
    code3.style.display = (code3.style.display === "none" || code3.style.display === "") ? "block" : "none";
    if (code3.style.display === "block") {
        code3.textContent = `
        // Exemple de code pour trouver le plus grand entre deux nombres :
        function trouver() {
            let a = parseInt(prompt("Entrez le premier nombre :"));
            let b = parseInt(prompt("Entrez le second nombre :"));
            let max = a > b ? a : b;
            alert("Le plus grand entre " + a + " et " + b + " est : " + max);
        }
        `;
    }
}

// 4. Calculer la moyenne de trois nombres
function calculer() {
    let a = parseFloat(prompt("Entrez le premier nombre :"));
    let b = parseFloat(prompt("Entrez le second nombre :"));
    let c = parseFloat(prompt("Entrez le troisième nombre :"));
    let moyenne = (a + b + c) / 3;
    alert(`La moyenne des trois nombres est : ${moyenne}`);
}

function calculerdemarche() {
    let code4 = document.getElementById('code4');
    code4.style.display = (code4.style.display === "none" || code4.style.display === "") ? "block" : "none";
    if (code4.style.display === "block") {
        code4.textContent = `
        // Exemple de code pour calculer la moyenne de trois nombres :
        function calculer() {
            let a = parseFloat(prompt("Entrez le premier nombre :"));
            let b = parseFloat(prompt("Entrez le second nombre :"));
            let c = parseFloat(prompt("Entrez le troisième nombre :"));
            let moyenne = (a + b + c) / 3;
            alert("La moyenne des trois nombres est : " + moyenne);
        }
        `;
    }
}

// 5. Inverser deux nombres
function inverser() {
    let a = parseInt(prompt("Entrez le premier nombre :"));
    let b = parseInt(prompt("Entrez le second nombre :"));
    let temp = a;
    a = b;
    b = temp;
    alert(`Les nombres inversés sont : ${a} et ${b}`);
}

function inverserdemarche() {
    let code5 = document.getElementById('code5');
    code5.style.display = (code5.style.display === "none" || code5.style.display === "") ? "block" : "none";
    if (code5.style.display === "block") {
        code5.textContent = `
        // Exemple de code pour inverser deux nombres :
        function inverser() {
            let a = parseInt(prompt("Entrez le premier nombre :"));
            let b = parseInt(prompt("Entrez le second nombre :"));
            let temp = a;
            a = b;
            b = temp;
            alert("Les nombres inversés sont : " + a + " et " + b);
        }
        `;
    }
}

// 6. Retourner un nombre aléatoire entre 1 et 6
function retourner() {
    let random = Math.floor(Math.random() * 6) + 1;
    alert(`Le nombre aléatoire est : ${random}`);
}

function retournerdemarche() {
    let code6 = document.getElementById('code6');
    code6.style.display = (code6.style.display === "none" || code6.style.display === "") ? "block" : "none";
    if (code6.style.display === "block") {
        code6.textContent = `
        // Exemple de code pour générer un nombre aléatoire entre 1 et 6 :
        function retourner() {
            let random = Math.floor(Math.random() * 6) + 1;
            alert("Le nombre aléatoire est : " + random);
        }
        `;
    }
}

// 7. Convertir une durée en secondes en heures, minutes et secondes
function convertir() {
    let seconds = parseInt(prompt("Entrez la durée en secondes :"));
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    seconds = seconds % 60;
    alert(`${hours} heures, ${minutes} minutes, ${seconds} secondes`);
}

function convertirdemarche() {
    let code7 = document.getElementById('code7');
    code7.style.display = (code7.style.display === "none" || code7.style.display === "") ? "block" : "none";
    if (code7.style.display === "block") {
        code7.textContent = `
        // Exemple de code pour convertir des secondes en heures, minutes, secondes :
        function convertir() {
            let seconds = parseInt(prompt("Entrez la durée en secondes :"));
            let hours = Math.floor(seconds / 3600);
            let minutes = Math.floor((seconds % 3600) / 60);
            seconds = seconds % 60;
            alert(hours + " heures, " + minutes + " minutes, " + seconds + " secondes");
        }
        `;
    }
}

// 8. Vérifier si un nombre est pair ou impair
function pair() {
    let number = parseInt(prompt("Entrez un nombre :"));
    if (number % 2 === 0) {
        alert(`${number} est pair.`);
    } else {
        alert(`${number} est impair.`);
    }
}

function pairdemarche() {
    let code8 = document.getElementById('code8');
    code8.style.display = (code8.style.display === "none" || code8.style.display === "") ? "block" : "none";
    if (code8.style.display === "block") {
        code8.textContent = `
        // Exemple de code pour vérifier si un nombre est pair ou impair :
        function pair() {
            let number = parseInt(prompt("Entrez un nombre :"));
            if (number % 2 === 0) {
                alert(number + " est pair.");
            } else {
                alert(number + " est impair.");
            }
        }
        `;
    }
}

// 9. Table de multiplication
function table() {
    let number = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${number} x ${i} = ${number * i}\n`;
    }
    alert("Table de multiplication de " + number + " :\n" + result);
}

function tabledemarche() {
    let code9 = document.getElementById('code9');
    code9.style.display = (code9.style.display === "none" || code9.style.display === "") ? "block" : "none";
    if (code9.style.display === "block") {
        code9.textContent = `
        // Exemple de code pour afficher la table de multiplication :
        function table() {
            let number = parseInt(prompt("Entrez un nombre pour afficher sa table de multiplication :"));
            let result = "";
            for (let i = 1; i <= 10; i++) {
                result += number + " x " + i + " = " + (number * i) + "\n";
            }
            alert("Table de multiplication de " + number + " :\n" + result);
        }
        `;
    }
}

// 10. Calculer la factorielle d'un nombre
function compter(){
    let n = parseInt(prompt("Entrez un nombre pour calculer sa factorielle :"));
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    alert(`La factorielle de ${n} est : ${result}`);
}

function compterdemarche() {
    let code10 = document.getElementById('code10');
    code10.style.display = (code10.style.display === "none" || code10.style.display === "") ? "block" : "none";
    if (code10.style.display === "block") {
        code10.textContent = `
        // Exemple de code pour calculer la factorielle d'un nombre :
        function factorielle() {
            let n = parseInt(prompt("Entrez un nombre pour calculer sa factorielle :"));
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            alert("La factorielle de " + n + " est : " + result);
        }
        `;
    }
}

// 11. Vérifier si un nombre est un palindrome
function palindrome() {
    let str = prompt("Entrez une chaîne de caractères :");
    let reversedStr = str.split('').reverse().join('');
    if (str === reversedStr) {
        alert(`${str} est un palindrome.`);
    } else {
        alert(`${str} n'est pas un palindrome.`);
    }
}

function palindromedemarche() {
    let code11 = document.getElementById('code11');
    code11.style.display = (code11.style.display === "none" || code11.style.display === "") ? "block" : "none";
    if (code11.style.display === "block") {
        code11.textContent = `
        // Exemple de code pour vérifier si un mot est un palindrome :
        function palindrome() {
            let str = prompt("Entrez une chaîne de caractères :");
            let reversedStr = str.split('').reverse().join('');
            if (str === reversedStr) {
                alert(str + " est un palindrome.");
            } else {
                alert(str + " n'est pas un palindrome.");
            }
        }
        `;
    }
}

// 12. Compter le nombre de voyelles dans une chaîne
function compterVoyelles() {
    let str = prompt("Entrez une chaîne de caractères :");
    let count = 0;
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let char of str.toLowerCase()) {
        if (voyelles.includes(char)) {
            count++;
        }
    }
    alert(`Il y a ${count} voyelles dans la chaîne.`);
}

function compterVoyellesDemarche() {
    let code12 = document.getElementById('code12');
    code12.style.display = (code12.style.display === "none" || code12.style.display === "") ? "block" : "none";
    if (code12.style.display === "block") {
        code12.textContent = `
        // Exemple de code pour compter le nombre de voyelles dans une chaîne :
        function compterVoyelles() {
            let str = prompt("Entrez une chaîne de caractères :");
            let count = 0;
            const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
            for (let char of str.toLowerCase()) {
                if (voyelles.includes(char)) {
                    count++;
                }
            }
            alert("Il y a " + count + " voyelles dans la chaîne.");
        }
        `;
    }
}

// 13. Convertir un nombre en binaire
function convertirBinaire() {
    let num = parseInt(prompt("Entrez un nombre à convertir en binaire :"));
    let binaire = num.toString(2);
    alert(`Le nombre ${num} en binaire est : ${binaire}`);
}

function convertirBinaireDemarche() {
    let code13 = document.getElementById('code13');
    code13.style.display = (code13.style.display === "none" || code13.style.display === "") ? "block" : "none";
    if (code13.style.display === "block") {
        code13.textContent = `
        // Exemple de code pour convertir un nombre en binaire :
        function convertirBinaire() {
            let num = parseInt(prompt("Entrez un nombre à convertir en binaire :"));
            let binaire = num.toString(2);
            alert("Le nombre " + num + " en binaire est : " + binaire);
        }
        `;
    }
}

// 14. Vérifier si une chaîne est un anagramme d'une autre
function anagramme() {
    let str1 = prompt("Entrez la première chaîne de caractères :");
    let str2 = prompt("Entrez la seconde chaîne de caractères :");
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    if (sortedStr1 === sortedStr2) {
        alert(`${str1} et ${str2} sont des anagrammes.`);
    } else {
        alert(`${str1} et ${str2} ne sont pas des anagrammes.`);
    }
}

function anagrammeDemarche() {
    let code14 = document.getElementById('code14');
    code14.style.display = (code14.style.display === "none" || code14.style.display === "") ? "block" : "none";
    if (code14.style.display === "block") {
        code14.textContent = `
        // Exemple de code pour vérifier si deux chaînes sont des anagrammes :
        function anagramme() {
            let str1 = prompt("Entrez la première chaîne de caractères :");
            let str2 = prompt("Entrez la seconde chaîne de caractères :");
            let sortedStr1 = str1.split('').sort().join('');
            let sortedStr2 = str2.split('').sort().join('');
            if (sortedStr1 === sortedStr2) {
                alert(str1 + " et " + str2 + " sont des anagrammes.");
            } else {
                alert(str1 + " et " + str2 + " ne sont pas des anagrammes.");
            }
        }
        `;
    }
}

// 15. Vérifier si une année est bissextile
function bissextile() {
    let year = parseInt(prompt("Entrez une année pour vérifier si elle est bissextile :"));
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        alert(`${year} est une année bissextile.`);
    } else {
        alert(`${year} n'est pas une année bissextile.`);
    }
}

function bissextileDemarche() {
    let code15 = document.getElementById('code15');
    code15.style.display = (code15.style.display === "none" || code15.style.display === "") ? "block" : "none";
    if (code15.style.display === "block") {
        code15.textContent = `
        // Exemple de code pour vérifier si une année est bissextile :
        function bissextile() {
            let year = parseInt(prompt("Entrez une année pour vérifier si elle est bissextile :"));
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                alert(year + " est une année bissextile.");
            } else {
                alert(year + " n'est pas une année bissextile.");
            }
        }
        `;
    }
}

