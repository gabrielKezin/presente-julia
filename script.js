function iniciarMusicaEExibirProximaPagina(atual, proxima) {
    const audio = document.getElementById('background-audio');
    audio.play().then(() => {
        localStorage.setItem('isPlaying', 'true');
        localStorage.setItem('currentTime', audio.currentTime);
        mostrarProximaPagina(atual, proxima);
    }).catch(error => {
        console.log('Erro ao reproduzir áudio:', error);
    });
}

function mostrarProximaPagina(atual, proxima) {
    document.getElementById(atual).style.display = 'none';
    document.getElementById(proxima).style.display = 'block';
}

function mostrarSurpresa() { 
    alert('Você é incrível e eu te amo muito!');
}


// Código para garantir que o áudio continue tocando entre as páginas
if (localStorage.getItem('isPlaying') === 'true') {
    const audio = document.getElementById('background-audio');
    audio.currentTime = localStorage.getItem('currentTime');
    audio.play();
}

document.getElementById('background-audio').addEventListener('play', function() {
    localStorage.setItem('isPlaying', 'true');
});

document.getElementById('background-audio').addEventListener('pause', function() {
    localStorage.setItem('isPlaying', 'false');
});

document.getElementById('background-audio').addEventListener('timeupdate', function() {
    localStorage.setItem('currentTime', this.currentTime);
});


// Código para a assinatura
document.addEventListener('DOMContentLoaded', function() {
    const signaturePad = new SignaturePad(document.getElementById('signature-pad'));
    const clearButton = document.getElementById('clear');
    const submitButton = document.getElementById('submit');
    const hiddenForm = document.getElementById('hidden-form');
    const signatureInput = document.getElementById('signature');
    const assinaturaInput = document.getElementById('assinatura');
    const aceitarCheck = document.getElementById('aceitar-check');
    
    clearButton.addEventListener('click', function() {
        signaturePad.clear();
    });

})