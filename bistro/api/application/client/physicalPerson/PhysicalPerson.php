<?php 
class PhysicalPerson {

    private $dateOfBirth;
    private $passportSeries;
    private $passportNumber;
    private $passportDate;
    private $clientId;

    function __construct($body) {
        $this->dateOfBirth = $body->dateOfBirth;
        $this->passportSeries = $body->passportSeries;
        $this->passportNumber = $body->passportNumber;
        $this->passportDate = $body->passportDate;  
        $this->clientId = $body->clientId;
    }

    function getDateOfBirth() {
        return $this->dateOfBirth;
    }

    function setDateOfBirth($dateOfBirth) {
        $this->dateOfBirth = $dateOfBirth;
    }

    function getPassportSeries() {
        return $this->passportSeries;
    }

    function setPassportSeries($passportSeries) {
        $this->passportSeries = $passportSeries;
    }

    function getPassportNumber() {
        return $this->passportNumber;
    }

    function setPassportNumber($passportNumber) {
        $this->passportNumber = $passportNumber;
    }

    function getPassportDate() {
        return $this->passportDate;
    }

    function setPassportDate($passportDate) {
        $this->passportDate = $passportDate;
    }
    
    function getClientId() {
        return $this->clientId;
    }

    function setClientId($clientId) {
        $this->clientId = $clientId;
    }
}