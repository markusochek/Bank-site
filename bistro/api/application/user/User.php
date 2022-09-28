<?php 
class User {

    private $login;
    private $password;
    private $token;

    function __construct($body) {
        $this->login = $body->login;
        $this->password = $body->password;
        $this->token = $body->token;
    }

    function getLogin() {
        return $this->login;
    }

    function setLogin($login) {
        $this->login = $login;
    }

    function getPassword() {
        return $this->password;
    }

    function setPassword($password) {
        $this->password = $password;
    }

    function getToken() {
        return $this->token;
    }

    function setToken($token) {
        $this->token = $token;
    }
}