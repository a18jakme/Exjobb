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
$id= mysqli_real_escape_string($conn, $_POST['id']); 
$age= mysqli_real_escape_string($conn, $_POST['age']); 
$device= mysqli_real_escape_string($conn, $_POST['device']);
$experience= mysqli_real_escape_string($conn, $_POST['experience']);
$skeumorphfails= mysqli_real_escape_string($conn, $_POST['skeumorphfails']);
$skeumorphtotaltime= mysqli_real_escape_string($conn, $_POST['skeumorphtotaltime']);
$flatdesignfails= mysqli_real_escape_string($conn, $_POST['flatdesignfails']);
$flatdesigntotaltime= mysqli_real_escape_string($conn, $_POST['flatdesigntotaltime']);

$sql = "INSERT INTO mydata (id, agegroup, device, experience, skeuomorphfails, skeuomorphtime, flatdesignfails, flatdesigntime)
VALUES ('$id','$age','$device','$experience','$skeumorphfails','$skeumorphtotaltime','$flatdesignfails','$flatdesigntotaltime')";

if ($conn->query($sql) === TRUE) {
    echo "Page saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>