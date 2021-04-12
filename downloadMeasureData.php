<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "exjobb";

try{
    $conn = new PDO("mysql:host=" . $servername . ";dbname=" . $dbname , $username, $password); // Create connection
}
catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
}

$sql = "SELECT * FROM mydata";
$stmt = $conn -> query($sql);
echo json_encode($stmt -> fetchAll(), JSON_PRETTY_PRINT);
?>