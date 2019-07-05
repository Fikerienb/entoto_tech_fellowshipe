<?php
$con = mysqli_connect('localhost', 'root','');
if (!$con){
    echo 'Not Connected To Server';
}
if (mysqli_select_db($con, 'login')){
    echo 'Database Not Selected';
}
$id = $_POST['id'];
$Name = $_POST['username'];
$password = $_POST['password'];
$sql = "INSERT INTO users (username , password) VALUES ('$Name, $passs')";
if (!mysqli_query($con,$sql)){
        echo 'Not inserted';
}
 else {
echo 'inserted';    
}
header(" refresh:2; url=process.php");
?>

