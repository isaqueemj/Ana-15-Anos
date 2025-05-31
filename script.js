document.addEventListener('DOMContentLoaded', () => {
  const welcomeContainer = document.getElementById('welcome-container');
  const welcomeForm = document.getElementById('welcome-form');
  const welcomeMessage = document.getElementById('welcome-message');

  // Mostrar o formulário sempre que abrir o site
  welcomeContainer.style.display = 'flex';
  welcomeMessage.style.display = 'none';

  welcomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = welcomeForm.username.value.trim();
    if (username) {
      welcomeContainer.style.display = 'none';
      welcomeMessage.style.display = 'block';
      welcomeMessage.textContent = `Olá, ${username}! Seja bem-vindo(a) ao meu aniversário de 15 anos! 🎉`;
    }
  });
});
