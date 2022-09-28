<?php 
class ContributionDB {
    private $dbConnect;
    
    function __construct($dbConnect) {
        $this->dbConnect = $dbConnect;
    }

    public function insertInto($contribution) {
        $query = 'INSERT INTO "contributions"("open_date", "close_date", "period", "bet", "frequency_of_capitalization", "client_id")
        VALUES (?, ?, ?, ?, ?, ?)';
        $stmt = $this->dbConnect->prepare($query);
        $body = array_values((array) $contribution);

        if ($stmt->execute($body)) {
            return true;
        }
    }

    public function selectAll($clientId) {
        $query = "SELECT open_date, close_date, period, bet, frequency_of_capitalization FROM contributions WHERE client_id = '".$clientId."'";
        return $this->dbConnect->query($query)->fetchAll();
    }
}