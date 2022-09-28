<?php 
class PhysicalPersonDB {
    private $dbConnect;
    
    function __construct($dbConnect) {
        $this->dbConnect = $dbConnect;
    }

    public function insertInto($physicalPerson) {
        $query = 'INSERT INTO "physical_persons"("date_of_birth", "passport_series", "passport_number", "passport_date", "client_id")
        VALUES (?, ?, ?, ?, ?)';
        $stmt = $this->dbConnect->prepare($query);
        $body = array_values((array) $physicalPerson);
        if($stmt->execute($body))
            return 1;
    }
}