<?php 
class CreditDB {
    private $dbConnect;
    
    function __construct($dbConnect) {
        $this->dbConnect = $dbConnect;
    }

    public function insertInto($credit) {
        $query = 'INSERT INTO "credits"("open_date", "close_date", "period", "sum", "payment_schedule", "client_id")
        VALUES (?, ?, ?, ?, ?, ?)';
        $stmt = $this->dbConnect->prepare($query);
        $body = array_values((array) $credit);

        if ($stmt->execute($body)) {
            return true;
        }
    }

    public function selectAll($clientId) {
        $query = "SELECT open_date, close_date, period, sum, payment_schedule FROM credits WHERE client_id = '".$clientId."'";
        return $this->dbConnect->query($query)->fetchAll();
    }
}