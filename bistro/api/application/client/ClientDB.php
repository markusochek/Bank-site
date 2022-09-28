<?php 
class ClientDB {
    private $dbConnect;

    function __construct($dbConnect) {
        $this->dbConnect = $dbConnect;
    }

    public function selectByToken($token) {
        $query = "SELECT clients.id FROM users, clients WHERE
        users.token = '".$token."' AND
        users.id = clients.user_id";
        return $this->dbConnect->query($query)->fetchObject();
    }

    public function insertInto($client, $userId) {
        $query = 'INSERT INTO "clients"("full_name", "inn", "type_person", "user_id")
        VALUES (?, ?, ?, ?)';
        $stmt = $this->dbConnect->prepare($query);
        $body = array_values((array) $client);

        if ($stmt->execute($body)) {
            $query = "SELECT clients.id FROM clients, users WHERE clients.user_id = '".$userId."'";
            $client = $this->dbConnect->query($query)->fetchObject();
            return $client->id;
        }
    }
}
