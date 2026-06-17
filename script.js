function exibirNome() {
    const nomeInput = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');
    const nome = nomeInput.value.trim();
    
    if (nome === '') {
        mensagem.textContent = 'Por favor, digite seu nome!';
        mensagem.style.color = '#dc3545';
    } else {
        mensagem.textContent = `Bem-vindo, ${nome}!`;
        mensagem.style.color = '#28a745';
        nomeInput.value = '';
    }
}

// Permitir enviar com Enter
document.addEventListener('DOMContentLoaded', function() {
    const nomeInput = document.getElementById('nome');
    nomeInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            exibirNome();
        }
    });
});
