function inverterPalavra() {
    const palavraInput = document.getElementById('palavra').value;
    const palavraInvertida = invertePalavra(palavraInput);
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = palavraInvertida;
    
    // Exibe o botão "Copiar Resposta" quando houver uma resposta
    const botaoCopiar = document.getElementById('botaoCopiar');
    botaoCopiar.style.display = palavraInvertida ? 'block' : 'none';
    
    // Limpa o campo de entrada de texto
    document.getElementById('palavra').value = '';
}

function invertePalavra(palavra) {
    const alfabeto = {
        'a': 'u', 'b': 'z', 'c': 'x', 'd': 'v', 'e': 'o',
        'f': 't', 'g': 's', 'h': 'r', 'i': 'i', 'j': 'q',
        'l': 'p', 'm': 'n', 'n': 'm', 'p': 'l', 'o': 'e',
        'q': 'j', 'r': 'h', 's': 'g', 't': 'f',
        'u': 'a', 'v': 'd', 'w': 'w', 'x': 'c', 'y': 'y', 'z': 'b'
    };

    let palavraInvertida = '';
    for (let i = 0; i < palavra.length; i++) {
        const letra = palavra[i];
        if (letra.toLowerCase() in alfabeto) {
            if (letra === letra.toLowerCase()) {
                palavraInvertida += alfabeto[letra.toLowerCase()];
            } else {
                palavraInvertida += alfabeto[letra.toLowerCase()].toUpperCase();
            }
        } else {
            // Não é uma letra do alfabeto, mantenha inalterado
            palavraInvertida += letra;
        }
    }

    return palavraInvertida;
}

function copiarResultado() {
    const resultadoElement = document.getElementById('resultado');
    const textoResultado = resultadoElement.textContent;

    const tempInput = document.createElement('textarea');
    tempInput.value = textoResultado;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

// Adiciona um ouvinte de evento para a tecla "Enter" na textarea
document.getElementById('palavra').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede que a tecla "Enter" realize quebras de linha na textarea
        inverterPalavra(); // Chama a função inverterPalavra() quando a tecla "Enter" for pressionada
    }
});
function colarTexto() {
    navigator.clipboard.readText().then(function(text) {
        const palavraInput = document.getElementById('palavra');
        palavraInput.value = text;
    }).catch(function(err) {
        console.error('Erro ao colar texto: ', err);
    });
}
