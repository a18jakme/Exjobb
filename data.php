<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "exjobb";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 

$test1= mysqli_real_escape_string($conn, $_POST['test1']); // Ensure that the variable is correct

$sql = "INSERT INTO test (test1)
VALUES ('$test1')";

if ($conn->query($sql) === TRUE) {
    echo "Page saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>