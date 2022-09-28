<?php 
class LegalPersonDB {
    private $dbConnect;
    
    function __construct($dbConnect) {
        $this->dbConnect = $dbConnect;
    }

    public function insertInto($legalPerson) {
        
        $query = 'INSERT INTO "legal_persons"("name_company", "address", "ogrn", "inn_company", "kpp", "client_id")
            VALUES (?, ?, ?, ?, ?, ?);';
        $stmt = $this->dbConnect->prepare($query);
        $body = array_values((array) $legalPerson);
        if($stmt->execute($body))
            return 1;
    }
}