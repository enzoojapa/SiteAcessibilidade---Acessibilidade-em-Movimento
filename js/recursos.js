// Botão de Alto Contraste
document.addEventListener('DOMContentLoaded', () => {
    const botaoContraste = document.getElementById('modo-contraste');
    botaoContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });
});


// Leitor de Texto
const btnLerTexto = document.getElementById('btnLerTexto');
const textoLeitura = document.getElementById('textoLeitura');

btnLerTexto.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textoLeitura.textContent);
    utterance.lang = 'pt-BR';
    window.speechSynthesis.speak(utterance);
});
