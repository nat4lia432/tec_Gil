//barra
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
});

//caixa de texto//
var conteudoHtml = '';
    for (var i = 1; i <= 6; i++) {
        var conteudo = localStorage.getItem('conteudo' + i + 'ParaUsuarios');
        var foto = localStorage.getItem('foto' + i + 'ParaUsuarios');
        var pdf = localStorage.getItem('pdf' + i + 'ParaUsuarios');

        if (conteudo) {
            conteudoHtml += '<div>';
            conteudoHtml += '<h3>Conteúdo ' + i + '</h3>';
            conteudoHtml += '<p>' + conteudo + '</p>';
            if (foto) {
                conteudoHtml += '<img src="' + foto + '" alt="Foto ' + i + '">';
            }
            if (pdf) {
                conteudoHtml += '<embed src="' + pdf + '" type="application/pdf" width="600" height="500">';
            }
            conteudoHtml += '</div>';
        }
    }

    // Insere o conteúdo formatado dentro do elemento #conteudoUsuario
    document.getElementById('conteudoUsuario').innerHTML = conteudoHtml;
