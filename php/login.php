<?php
    header('Content-Type: text/html; charset=UTF-8');
    include_once('connection.php');
    if (isset($_POST["submit"])){
        $email = $_POST["email"];
        $senha = $_POST["senha"];
        $result = mysqli_query($connection,"INSERT INTO (email,senha) VALUES ('$email','$senha')");
    } else {
        echo "Erro";
    }
    ?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login para o usuário</title>
</head>
<body>
    <form action="/php/login.php" method="post">
        <h1>Teste de sistema de login</h1>
        <input type="email" name="email" placeholder="Coloque seu email">
        <input type="password" name="password" placeholder="Coloque sua senha">
        <input type="submit" value="Enviar">
    </form>
</body>
</html>