<?php 
class UserDB {
    private $dbConnect;

    function __construct($dbConnect) {
        $this->dbConnect = $dbConnect;
    }

    public function selectByToken($token) {
        $query = "SELECT id FROM users WHERE token = '".$token."'";
        return $this->dbConnect->query($query)->fetchObject();
    }

    public function insertInto($user) {
        $query = 'INSERT INTO "users"("login", "password", "token")
        VALUES (?, ?, ?)';
        $stmt = $this->dbConnect->prepare($query);
        $body = array_values((array) $user);
        if ($stmt->execute($body)) {
            return true;
        }
    }

    public function updateToken($user) {
        $query = "UPDATE users SET token = '".$user->getToken()."' 
        WHERE login = '".$user->getLogin()."' AND
        password = '".$user->getPassword()."'";
        if($this->dbConnect->query($query)) {
            return $user->getToken();
        }
    }
}