//barra
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
});

//caixa de texto//
document.getElementById('salvarBtn').addEventListener('click', function(event) {
    event.preventDefault();

    // Capturar os valores dos campos usando FormData
    var formData = new FormData(document.getElementById('formConteudo'));
    var conteudo = formData.get('conteudo');
    var foto = formData.get('foto');
    var pdf = formData.get('pdf');

    // Salvando os valores no armazenamento local
    localStorage.setItem('conteudoParaUsuarios', conteudo);
    if (foto && foto.size > 0) {
        var readerFoto = new FileReader();
        readerFoto.onload = function(e) {
            localStorage.setItem('fotoParaUsuarios', e.target.result);
        };
        readerFoto.readAsDataURL(foto);
    }
    if (pdf && pdf.size > 0) {
        var readerPdf = new FileReader();
        readerPdf.onload = function(e) {
            localStorage.setItem('pdfParaUsuarios', e.target.result);
        };
        readerPdf.readAsDataURL(pdf);
    }

    // Exibir mensagem de sucesso
    alert('Conteúdo adicionado com sucesso!');

    // Limpar o formulário após a submissão
    document.getElementById('formConteudo').reset(); 
});