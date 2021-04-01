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
$age= mysqli_real_escape_string($conn, $_POST['age']); 
$device= mysqli_real_escape_string($conn, $_POST['device']);
$experience= mysqli_real_escape_string($conn, $_POST['experience']);
$internet= mysqli_real_escape_string($conn, $_POST['internet']);
$skeumorphfails= mysqli_real_escape_string($conn, $_POST['skeumorphfails']);
$skeumorphtotaltime= mysqli_real_escape_string($conn, $_POST['skeumorphtotaltime']);
$flatdesignfails= mysqli_real_escape_string($conn, $_POST['flatdesignfails']);
$flatdesigntotaltime= mysqli_real_escape_string($conn, $_POST['flatdesigntotaltime']);

$sql = "INSERT INTO myData (username, age, device, experience, internet, skeumorphfails, skeumorphspeed, flatdesignfails, flatdesignspeed)
VALUES ('$username','$age','$device','$experience','$internet','$skeumorphfails','$skeumorphtotaltime','$flatdesignfails','$flatdesigntotaltime')";

if ($conn->query($sql) === TRUE) {
    echo "Page saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>