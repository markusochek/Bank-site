<?php 
class LegalPerson {

    private $nameCompany;
    private $address;
    private $ogrn;
    private $innCompany;
    private $kpp;
    private $clientId;

    function __construct($body) {
        $this->nameCompany = $body->nameCompany;
        $this->address = $body->address;
        $this->ogrn = $body->ogrn;
        $this->innCompany = $body->innCompany;  
        $this->kpp = $body->kpp;  
        $this->clientId = $body->clientId;
    }

    function getnameCompany() {
        return $this->nameCompany;
    }

    function setnameCompany($nameCompany) {
        $this->nameCompany = $nameCompany;
    }

    function getaddress() {
        return $this->address;
    }

    function setaddress($address) {
        $this->address = $address;
    }

    function getogrn() {
        return $this->ogrn;
    }

    function setogrn($ogrn) {
        $this->ogrn = $ogrn;
    }

    function getinnCompany() {
        return $this->innCompany;
    }

    function setinnCompany($innCompany) {
        $this->innCompany = $innCompany;
    }

    function getKpp() {
        return $this->kpp;
    }

    function setKpp($kpp) {
        $this->kpp = $kpp;
    }
    
    function getClientId() {
        return $this->clientId;
    }

    function setClientId($clientId) {
        $this->clientId = $clientId;
    }
}