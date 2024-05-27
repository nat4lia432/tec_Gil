//barra//
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
});



// Função para salvar o conteúdo no localStorage
function salvarConteudo() {
    var conteudo = document.getElementById('conteudo').value;
    localStorage.setItem('conteudoParaUsuarios', conteudo);
    alert('Conteúdo salvo com sucesso!');
}

// Carrega o conteúdo salvo no localStorage quando a página do usuário é carregada
window.onload = function() {
    var conteudo = localStorage.getItem('conteudoParaUsuarios');
    var conteudoUsuarioDiv = document.getElementById('conteudoUsuario');

    if (conteudo) {
        conteudoUsuarioDiv.innerHTML = conteudo;
    } else {
        conteudoUsuarioDiv.innerHTML = 'Nenhum conteúdo disponível no momento.';
    }
};


//eventos//

function int() {
    var conteudo = document.getElementById("conteudo1");
    if (conteudo.style.display === "none") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

// Carrega o conteúdo salvo no localStorage quando a página de eveuser é carregada
window.onload = function() {
    var conteudo = localStorage.getItem('conteudoParaUsuarios');
    var conteudoUsuarioDiv = document.getElementById('conteudoUsuario');

    if (conteudo) {
        conteudoUsuarioDiv.innerHTML = conteudo1;
    } else {
        conteudoUsuarioDiv.innerHTML = 'Nenhum conteúdo disponível no momento.';
    }
};

// Função para salvar o conteúdo no localStorage (salvar/int)
function salvarConteudo() {
    var conteudo = document.getElementById('conteudo1').value;
    localStorage.setItem('conteudoParaUsuarios', conteudo);
    alert('Conteúdo salvo com sucesso!');

}

function gic() {
    var conteudo = document.getElementById("conteudo2");
    if (conteudo.style.display === "none") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

function mask() {
    var conteudo = document.getElementById("conteudo3");
    if (conteudo.style.display === "none") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

function lei() {
    var conteudo = document.getElementById("conteudo4");
    if (conteudo.style.display === "none") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

function car() {
    var conteudo = document.getElementById("conteudo5");
    if (conteudo.style.display === "none") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

function taç() {
    var conteudo = document.getElementById("conteudo6");
    if (conteudo.style.display === "none") {
        conteudo.style.display = "block";
    } else {
        conteudo.style.display = "none";
    }
}

//ADM//

function login() {
  var username = document.getElementById('usarname').value;
  var password = document.getElementById('password').value;

  if (username === 'adm' && password === '12345') {
    window.location.href = 'adm.html';
  } else {
    window.location.href = 'user.html';
  }

  return false; // Prevent form submission
}