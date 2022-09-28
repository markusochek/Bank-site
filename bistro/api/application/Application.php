<?php 
require_once("db/DB.php");

// user
require_once("user/User.php");
require_once("user/UserDB.php");

// client
require_once("client/Client.php");
require_once("client/ClientDB.php");

require_once("client/physicalPerson/PhysicalPerson.php");
require_once("client/physicalPerson/PhysicalPersonDB.php");

require_once("client/legalPerson/LegalPerson.php");
require_once("client/legalPerson/LegalPersonDB.php");

// product
require_once("product/contribution/Contribution.php");
require_once("product/contribution/ContributionDB.php");

require_once("product/credit/Credit.php");
require_once("product/credit/CreditDB.php");

Class Application {
    function __construct() {
        $this->db = new DB();

        // user
        $this->userDB = new UserDB($this->db->dbConnect);

        // client
        $this->clientDB = new ClientDB($this->db->dbConnect);
        $this->physicalPersonDB = new PhysicalPersonDB($this->db->dbConnect);
        $this->legalPersonDB = new LegalPersonDB($this->db->dbConnect);

        // product
        $this->contributionDB = new ContributionDB($this->db->dbConnect);
        $this->creditDB = new CreditDB($this->db->dbConnect);
        
    }

    public function addPerson($body) {
        $client = new Client((object) $body->client);
        $user = $this->userDB->selectByToken($body->token);
        $userId = $user->id;
        $client->setUserId($user->id);

        $clientId = $this->clientDB->insertInto($client, $userId);
        if ($clientId) {
            switch ($client->getTypePerson()) {
                case "physical":
                    $physicalPerson = new PhysicalPerson((object) $body->person);
                    $physicalPerson->setClientId($clientId);
                    return $this->physicalPersonDB->insertInto($physicalPerson);
                break;
                case "legal":
                    $legalPerson = new LegalPerson((object) $body->person);
                    $legalPerson->setClientId($clientId);
                    return $this->legalPersonDB->insertInto($legalPerson);
                break;
            }
        }
    }

    public function addCredit($body) {
        $credit = new Credit((object) $body->credit);
        $client = $this->clientDB->selectByToken($body->token);
        $credit->setClientId($client->id);
        return $this->creditDB->InsertInto($credit);
    }
    public function addContribution($body) {
        $contribution = new Contribution((object) $body->contribution);
        $client = $this->clientDB->selectByToken($body->token);
        $contribution->setClientId($client->id);
        return $this->contributionDB->InsertInto($contribution);
    }

    public function responseCheck($body) {
        $client = $this->clientDB->selectByToken($body->token);
        $products = [
        "credits" => $this->creditDB->selectAll($client->id),
        "contributions" =>  $this->contributionDB->selectAll($client->id)
        ];
        return $products;
    }

    private function hash($user) {
        return md5(md5($user->getLogin().$user->getPassword()).$user->getLogin());
    }

    public function registration($body) {
        $user = new User((object) $body->user);
        $hash = $this->hash($user);
        $user->setPassword($hash);
        return $this->userDB->insertInto($user);
    }

    public function authorization($body) {
        $user = new User((object) $body->user);
        $hash = $this->hash($user);
        $user->setPassword($hash);
        $token = md5($hash.uniqid(rand(1000, 5000)));
        $user->setToken($token);
        return [
            "token" => $this->userDB->updateToken($user),
            "fullAccount" => $this->clientDB->selectByToken($token)
        ];
        }

    public function setcookie($body) {
        return setcookie($body->name, $body->value, time()+6000);
    }

    public function unsetcookie($body) {
        return setcookie($body->name,"", time()-6000);
    }

    public function checkcookie($body) {
        if (isset($_COOKIE[$body->name])) {
            return $_COOKIE[$body->name];
        }
    }
}