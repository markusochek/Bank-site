<?php 
class Client {

    private $fullName;
    private $inn;
    private $typePerson;
    private $userId;

    function __construct($body) {
        $this->fullName = $body->fullName;
        $this->inn = $body->inn;
        $this->typePerson = $body->typePerson;
        $this->userId = $body->userId;
    }

    function getFullName() {
        return $this->fullName;
    }

    function setFullName($fullName) {
        $this->fullName = $fullName;
    }

    function getInn() {
        return $this->inn;
    }

    function setInn($inn) {
        $this->inn = $inn;
    }

    function getTypePerson() {
        return $this->typePerson;
    }

    function setTypePerson($typePerson) {
        $this->typePerson = $typePerson;
    }

    function getUserId() {
        return $this->userId;
    }

    function setUserId($userId) {
        $this->userId = $userId;
    }
}