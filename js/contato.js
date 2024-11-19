function validarFormulario() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');
    const errorNome = document.getElementById('errorNome');
    const errorEmail = document.getElementById('errorEmail');
    const errorMensagem = document.getElementById('errorMensagem');
    let isValid = true;

    // Limpar mensagens de erro
    errorNome.textContent = '';
    errorEmail.textContent = '';
    errorMensagem.textContent = '';

    // Validação de Nome
    if (nome.value.trim() === '') {
        errorNome.textContent = 'Preenchimento obrigatório: Nome';
        nome.focus();
        isValid = false;
    } else if (/\d/.test(nome.value)) {
        errorNome.textContent = 'Nome não pode conter números';
        nome.focus();
        isValid = false;
    }

    // Validação de E-mail
    if (email.value.trim() === '') {
        errorEmail.textContent = 'Preenchimento obrigatório: E-mail';
        if (isValid) email.focus();
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errorEmail.textContent = 'E-mail inválido';
        email.focus();
        isValid = false;
    }

    // Validação de Mensagem
    if (mensagem.value.trim() === '') {
        errorMensagem.textContent = 'Preenchimento obrigatório: Assunto';
        if (isValid) mensagem.focus();
        isValid = false;
    }

    // Submissão do formulário
    if (isValid) {
        alert('Formulário enviado com sucesso!');
        document.getElementById('formContato').submit();
    }
}




