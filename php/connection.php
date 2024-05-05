<?php
$connection = mysqli_connect('Localhost','root','','SOLVETON_LOGIN');
if ($connection -> connect_errno){
    echo "Erro";
} else {
    "Feito com sucesso";
}
?>