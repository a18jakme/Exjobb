<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "exjobb";

$conn = new mysqli($servername, $username, $password, $dbname); // Create connection
if ($conn->connect_error) {     // Check connection
    die("Connection failed: " . $conn->connect_error);
} 
// Ensure that the variable is correct
$username= mysqli_real_escape_string($conn, $_POST['username']); 
$fails= mysqli_real_escape_string($conn, $_POST['fails']); 

$sql = "INSERT INTO myData (username, fails)
VALUES ('$user','$fails')";

if ($conn->query($sql) === TRUE) {
    echo "Page saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>