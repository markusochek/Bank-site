<?php
class DB {
    function __construct() {
        $dbhost = "localhost";
        $dbport = 5433;
        $dbname = "bank";
        $dbuser = "postgres";
        $dbpassword = "postgres";
        $dsn = "pgsql:host=$dbhost;port=$dbport;dbname=$dbname;";

        try {
            $this->dbConnect = new PDO
            (
                $dsn, 
                $dbuser, 
                $dbpassword
            );
        }
        catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    function __destruct() {
        $this->dbConnect = null;
    }
}
?>