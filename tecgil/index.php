<?php
// Dados de conexão com o banco de dados
$host = 'viaduct.proxy.rlwy.net';
$port = '44722';
$dbname = 'railway';
$user = 'postgres';
$password = 'UJWbfBibRknVupzRBwUWmfJEqsMtwbaU';

// Cria a string de conexão
$dsn = "pgsql:host=$host;port=$port;dbname=$dbname";

try {
    // Conecta ao banco de dados
    $pdo = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

    // Verifica se o formulário foi submetido
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Recebe os dados do formulário
        $nome = $_POST['nome'];
        $matricula = $_POST['matricula'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        $sala = $_POST['sala'];
        $genero = $_POST['genero'];

        // Prepara a consulta SQL para inserção
        $sql = 'INSERT INTO cadastro (nome, matricula, email, senha, sala, genero) VALUES (:nome, :matricula, :email, :senha, :sala, :genero)';
        $stmt = $pdo->prepare($sql);

        // Executa a consulta com os dados do formulário
        $stmt->execute([
            ':nome' => $nome,
            ':matricula' => $matricula,
            ':email' => $email,
            ':senha' => password_hash($senha, PASSWORD_BCRYPT), // Armazena a senha de forma segura
            ':sala' => $sala,
            ':genero' => $genero
        ]);

        // Mensagem de sucesso
        echo 'Cadastro realizado com sucesso!';
    }
} catch (PDOException $e) {
    // Mensagem de erro em caso de falha na conexão
    echo 'Falha na conexão: ' . $e->getMessage();
}
?>
