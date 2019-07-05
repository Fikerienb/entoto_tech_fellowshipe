<?php
class dblogin {
    private $conn;
    function __construct() {
        include_once 'connect.php';
        $db=new connect();
        $this->conn = $db->con();
        
    }
    public function user_login($user,$pass){
        $stm=  $this->conn->prepare ("select * from login where username=? and password=?");
                $stm-> bind_param("ss", $user,$pass);
        $stm->execute();
        $stm-> store_result();
        if($stm->num_rows>0){
            return 1;       
        }else{
            return 2;
        }
        }
    }
    
        

