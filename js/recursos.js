// Botão de Alto Contraste
document.addEventListener('DOMContentLoaded', () => {
    const botaoContraste = document.getElementById('modo-contraste');
    botaoContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });
});

//Texto em Audio
const btnLerTexto = document.getElementById('btnLerTexto');

const textoLeitura = document.getElementById('textoLeitura');

btnLerTexto.addEventListener('click', () => {
    // Cria um objeto SpeechSynthesisUtterance que representa o texto a ser lido em voz alta
    const utterance = new SpeechSynthesisUtterance(textoLeitura.textContent);
    utterance.lang = 'pt-BR';
    // Usa a API de síntese de fala do navegador para falar o texto
    window.speechSynthesis.speak(utterance);
});
