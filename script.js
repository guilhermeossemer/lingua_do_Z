function inverterPalavra() {
    const palavraInput = document.getElementById('palavra').value;
    const palavraInvertida = invertePalavra(palavraInput);
    document.getElementById('resultado').textContent = palavraInvertida;
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
