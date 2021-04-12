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
$browser= mysqli_real_escape_string($conn, $_POST['browser']);
$experience= mysqli_real_escape_string($conn, $_POST['experience']);
$skeumorphfails= mysqli_real_escape_string($conn, $_POST['skeumorphfails']);
$skeumorphtotaltime= mysqli_real_escape_string($conn, $_POST['skeumorphtotaltime']);
$flatdesignfails= mysqli_real_escape_string($conn, $_POST['flatdesignfails']);
$flatdesigntotaltime= mysqli_real_escape_string($conn, $_POST['flatdesigntotaltime']);
$firstexperiment= mysqli_real_escape_string($conn, $_POST['firstexperiment']);

$sql = "INSERT INTO mydata (id, agegroup, device, experience, browser, skeuomorphfails, skeuomorphtime, flatdesignfails, flatdesigntime, firstexperiment)
VALUES ('$id','$age','$device','$experience','$browser','$skeumorphfails','$skeumorphtotaltime','$flatdesignfails','$flatdesigntotaltime','$firstexperiment')";

if ($conn->query($sql) === TRUE) {
    echo "Page saved!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>