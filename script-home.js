var bancoPalavras = ['ORACLE', 'ALURA', 'LINGUAGEM', 'JAVASCRIPT', 'CASCATA', 'DESAFIO', 'TRILHA', 'LOGICA', 'SOFTWARE'];

function raffleWord() {
    console.log(bancoPalavras);
	var palavraSecreta = bancoPalavras[Math.floor(Math.random() * bancoPalavras.length)];
	console.log(palavraSecreta);
	return palavraSecreta;
}

function isLetra(codigoL) {
    return codigoL >= 65 && codigoL <= 90;
}

function estructureGame() {
    let botoesStart = document.getElementById("botoes-start");
    botoesStart.classList.remove('visivel');
    botoesStart.classList.add('invisivel');

    let botoesGame = document.getElementById("botoes-game");
    botoesGame.classList.remove('invisivel');
    botoesGame.classList.add('visivel');

    palavraSecreta = raffleWord();
    qtdletters = palavraSecreta.length;
    console.log(qtdletters);
    canvaMadeira();
    game();
}

function validateNewWord() {
    const umaNovaPalavra = document.getElementById("umaNovaPalavra").value;
    const palavraValidada = umaNovaPalavra.toUpperCase();
    console.log(palavraValidada);
    addNewWord(palavraValidada);
}

function addNewWord(palavraValidada) {
    const novaPalavra = palavraValidada
    bancoPalavras.push(novaPalavra);
    // console.log(bancoPalavras);
    alert("Palavra inserida!");
    loadHome();
}








