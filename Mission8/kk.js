
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
        
        function addition() {
            let a = parseInt(prompt("Entrez le premier nombre :"));
            let b = parseInt(prompt("Entrez le second nombre :"));
            let somme = a + b;
            alert("La somme de " + a + " et " + b + " est : " + somme);
        }
        `;
    }
}


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
       
        function trouver() {
            let a = parseInt(prompt("Entrez le premier nombre :"));
            let b = parseInt(prompt("Entrez le second nombre :"));
            let max = a > b ? a : b;
            alert("Le plus grand entre " + a + " et " + b + " est : " + max);
        }
        `;
    }
}


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


function retourner() {
    let random = Math.floor(Math.random() * 6) + 1;
    alert(`Le nombre aléatoire est : ${random}`);
}

function retournerdemarche() {
    let code6 = document.getElementById('code6');
    code6.style.display = (code6.style.display === "none" || code6.style.display === "") ? "block" : "none";
    if (code6.style.display === "block") {
        code6.textContent = `
        
        function retourner() {
            let random = Math.floor(Math.random() * 6) + 1;
            alert("Le nombre aléatoire est : " + random);
        }
        `;
    }
}


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



function compter() {
    let word = prompt("Entrez un mot :");
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            count++;
        }
    }
    alert(`Le nombre de voyelles dans "${word}" est : ${count}`);
}

function compterdemarche() {
    let code10 = document.getElementById('code10');
    code10.style.display = (code10.style.display === "none" || code10.style.display === "") ? "block" : "none";
    if (code10.style.display === "block") {
    document.getElementById('code10').textContent = `
    
    function compter() {
        let word = prompt("Entrez un mot :");
        let count = 0;
        const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        for (let i = 0; i < word.length; i++) {
            if (vowels.includes(word[i].toLowerCase())) {
                count++;
            }
        }
        alert('"Le nombre de voyelles dans \"" + word + "\" est : " + count');
    }
    `;
}
}


function verifier() {
    let number = parseInt(prompt("Entrez un nombre :"));
    if (number % 3 === 0 && number % 5 === 0) {
        alert(`${number} est divisible par 3 et par 5.`);
    } else {
        alert(`${number} n_est pas divisible par 3 et par 5.`);
    }
}

function verifierdemarche() {
    let code11 = document.getElementById('code11');
    code11.style.display = (code11.style.display === "none" || code11.style.display === "") ? "block" : "none";
    if (code11.style.display === "block") {
    document.getElementById('code11').textContent = `
    
    function verifier() {
        let number = parseInt(prompt("Entrez un nombre :"));
        if (number % 3 === 0 && number % 5 === 0) {
            alert('number + " est divisible par 3 et par 5."');
        } else {
            alert('number + " n_est pas divisible par 3 et par 5."');
        }
    }
    `;
}
}

function affichage() {
    let text = prompt("Entrez une chaîne de caractères :");
    alert(`La chaîne en majuscules est : ${text.toUpperCase()}`);
}

function affichagedemarche() {
    let code12 = document.getElementById('code12');
    code12.style.display = (code12.style.display === "none" || code12.style.display === "") ? "block" : "none";
    if (code12.style.display === "block") {
    document.getElementById('code12').textContent =` 
    
    function affichage() {
        let text = prompt("Entrez une chaîne de caractères :");
        alert('"La chaîne en majuscules est : " + text.toUpperCase()');
    }
    `;
}
}


function factoriel() {
    let number = parseInt(prompt("Entrez un nombre pour calculer son factoriel :"));
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    alert(`Le factoriel de ${number} est : ${fact}`);
}

function factorieldemarche() {
    let code13 = document.getElementById('code13');
    code13.style.display = (code13.style.display === "none" || code13.style.display === "") ? "block" : "none";
    if (code13.style.display === "block") {
    document.getElementById('code13').textContent = `
    
    function factoriel() {
        let number = parseInt(prompt("Entrez un nombre pour calculer son factoriel :"));
        let fact = 1;
        for (let i = 1; i <= number; i++) {
            fact *= i;
        }
        alert('"Le factoriel de " + number + " est : " + fact');
    }
    `;
}
}


function verification() {
    let number = prompt("Entrez un nombre :");
    let reversed = number.split('').reverse().join('');
    if (number === reversed) {
        alert(`${number} est un palindrome.`);
    } else {
        alert(`${number} n_est pas un palindrome.`);
    }
}

function verificationdemarche() {
    let code14 = document.getElementById('code14');
    code14.style.display = (code14.style.display === "none" || code14.style.display === "") ? "block" : "none";
    if (code14.style.display === "block") {
    document.getElementById('code14').textContent = `
    function verification(){
        let number = prompt("Entrez un nombre :");
        let reversed = number.split('').reverse().join('');
        if (number === reversed) {
            alert('number + " est un palindrome."');
        } else {
            alert('number + " n_est pas un palindrome."');
        }
    }
    `;
}
}



function simuler() {
    let board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];
    let currentPlayer = 'X';
    let moves = 0;

    // Afficher le tableau de jeu
    function displayBoard() {
        let boardStr = board.map(row => row.join(' ')).join('\n');
        alert(boardStr);
    }

    // Vérifier si un joueur a gagné
    function checkWin(player) {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
            if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
        }
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
        return false;
    }

    // Demander et jouer un coup
    function play() {
        displayBoard();
        let row = parseInt(prompt(`${currentPlayer}, entrez le numéro de la ligne (0, 1, 2) :`));
        let col = parseInt(prompt(`${currentPlayer}, entrez le numéro de la colonne (0, 1, 2) :`));
        if (board[row][col] === '_') {
            board[row][col] = currentPlayer;
            moves++;
            if (checkWin(currentPlayer)) {
                displayBoard();
                alert(`${currentPlayer} a gagné!`);
                return;
            }
            if (moves === 9) {
                displayBoard();
                alert("Match nul!");
                return;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Changer de joueur
            play(); // Prochain tour
        } else {
            alert("Case déjà occupée, essayez encore.");
            play(); // Réessayer
        }
    }

    play(); // Démarrer le jeu
}


function simulerdemarche() {
    let code15 = document.getElementById('code15');
    code15.style.display = (code15.style.display === "none" || code15.style.display === "") ? "block" : "none";
    if (code15.style.display === "block") {
    document.getElementById('code15').textContent = `
function simuler() {
let board = [
['_', '_', '_'],
['_', '_', '_'],
['_', '_', '_']
];
let currentPlayer = 'X';
let moves = 0;

function displayBoard() {
let boardStr = board.map(row => row.join(' ')).join('\\n');
alert(boardStr);
}

function checkWin(player) {
for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
}
if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
return false;
}

function play() {
displayBoard();
let row = parseInt(prompt(\`\${currentPlayer}, entrez le numéro de la ligne (0, 1, 2) :\`));
let col = parseInt(prompt(\`\${currentPlayer}, entrez le numéro de la colonne (0, 1, 2) :\`));
if (board[row][col] === '_') {
    board[row][col] = currentPlayer;
    moves++;
    if (checkWin(currentPlayer)) {
        displayBoard();
        alert(\`\${currentPlayer} a gagné!\`);
        return;
    }
    if (moves === 9) {
        displayBoard();
        alert("Match nul!");
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    play();
} else {
    alert("Case déjà occupée, essayez encore.");
    play();
}
}

play();
}
    `;
}
}
