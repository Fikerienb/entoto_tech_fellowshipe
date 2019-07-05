 <?php


include_once 'dblogin.php';
if(isset($_POST['user']) and isset ($_POST['pass'])){
            $user=$_POST['user'];
            $pass=$_POST['pass'];
            $db=new dblogin();
            $result=$db->user_login($user,$pass);
            if($result=='1'){
                echo 'successfully login!!';
            }else{
    echo 'incorrect username and password';
            }
} 

