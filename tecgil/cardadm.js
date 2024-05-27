//barra
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
});

//caixa de texto//
window.onload = function() {
    var adminFoto = localStorage.getItem('adminFoto');

    if (adminFoto) {
        var conteudoUsuario = document.getElementById('conteudoUsuario');
        conteudoUsuario.innerHTML = '<h3>Foto do Administrador</h3><img src="' + adminFoto + '" alt="Foto do Administrador" style="max-width: 100%; height: auto;">';
    } else {
        var conteudoUsuario = document.getElementById('conteudoUsuario');
        conteudoUsuario.innerHTML = '<p>Nenhuma foto adicionada pelo administrador.</p>';
    }
};

