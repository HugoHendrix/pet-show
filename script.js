document.addEventListener('DOMContentLoaded', function () {
    // Aguarde o carregamento do DOM antes de aplicar a classe que inicia a animação
    document.querySelector('.welcome-section').classList.add('fade-in');
});

// BOTÃO DE VOLTA AO TOPO
// Função para rolar suavemente de volta ao topo
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Função para verificar a posição de rolagem e mostrar/ocultar o botão
function verificarPosicaoRolagem() {
    const btnVoltarTopo = document.getElementById('btn-voltar-topo');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnVoltarTopo.style.display = 'block';
    } else {
        btnVoltarTopo.style.display = 'none';
    }
}

// Adiciona um ouvinte de evento para verificar a posição de rolagem ao rolar a página
window.onscroll = function() {
    verificarPosicaoRolagem();
};



// VERIFICAÇÃO DO FORMULÁRIO 
const verifyForm = () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    // Expressão regular para verificar se o nome contém apenas letras e tem entre 3 e 25 caracteres
    const nomeRegex = /^[a-zA-Z]{3,25}$/;

    if (!nome.trim()) {
        document.getElementById("nomeError").innerText = "Por favor, insira seu nome.";
        return false;
    }

    // Verifica se o nome atende ao padrão da expressão regular
    if (!nomeRegex.test(nome)) {
        document.getElementById("nomeError").innerText = "O nome deve conter apenas letras e ter entre 3 e 25 caracteres.";
        return false;
    }

    // Restante do código de validação (e-mail, mensagem) permanece o mesmo...

    // Limpa mensagens de erro se os campos forem válidos
    document.getElementById("nomeError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("mensagemError").innerText = "";

    return true;
};
