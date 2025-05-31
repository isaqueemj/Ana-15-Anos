// Código para index.html: formulário e redirecionamento
const welcomeForm = document.getElementById('welcome-form');
if (welcomeForm) {
    welcomeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = this.username.value.trim();
        if (username) {
            window.location.href = 'convite.html?nome=' + encodeURIComponent(username);
        }
    });
}

// Código para convite.html: leitura do parâmetro da URL e mensagem personalizada
const inviteTitle = document.getElementById('invite-title');
if (inviteTitle) {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const nome = getQueryParam('nome');
    if (nome) {
        inviteTitle.textContent = `Olá, ${nome}!`;
    } else {
        inviteTitle.textContent = 'Olá!';
    }
}
