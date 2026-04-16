// Script de logout para o Portal da Chefia
// Adicione este script ao chefia.html se desejar um botão de logout

function adicionarBotaoLogout() {
  // Cria o botão de logout
  const logoutBtn = document.createElement('button');
  logoutBtn.innerHTML = '🚪 Sair';
  logoutBtn.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background: #c0392b;
    color: white;
    border: none;
    border-radius: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    z-index: 10000;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.2s;
  `;

  logoutBtn.addEventListener('mouseenter', function() {
    this.style.background = '#a93226';
    this.style.transform = 'translateY(-2px)';
    this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
  });

  logoutBtn.addEventListener('mouseleave', function() {
    this.style.background = '#c0392b';
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
  });

  logoutBtn.addEventListener('click', function() {
    if (confirm('Deseja realmente sair do Portal da Chefia?')) {
      // Remove a autenticação
      sessionStorage.removeItem('chefiaAutenticada');
      // Redireciona para a página inicial
      window.location.href = 'index.html';
    }
  });

  document.body.appendChild(logoutBtn);
}

// Adiciona o botão quando a página carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', adicionarBotaoLogout);
} else {
  adicionarBotaoLogout();
}

// Made with Bob
