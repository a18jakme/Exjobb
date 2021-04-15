<?php
$servername = "localhost";
$username = "a18jakme";
$password = "ajarkell123";
$dbname = "a18jakme_exjobb";

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