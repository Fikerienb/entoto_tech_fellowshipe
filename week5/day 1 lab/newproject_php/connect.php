<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of connect
 *
 * @author Tigist
 */
class connect {
    private $conn;
    function __construct() {
        
    }
    
    function con(){
   
            $host='localhost';
            $user='root';
            $pass='';
            $dbname='php_first';
            $this->conn=new mysqli($host, $user, $pass, $dbname);
            return  $this->conn;
    }
}
