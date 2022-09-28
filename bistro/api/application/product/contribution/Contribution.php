<?php 
class Contribution {

    private $openDate;
    private $closeDate;
    private $period;
    private $bet;
    private $frequencyOfСapitalization;
    private $clientId;

    function __construct($body) {
        $this->openDate = $body->openDate;
        $this->closeDate = $body->closeDate;
        $this->period = $body->period;
        $this->bet = $body->bet;  
        $this->frequencyOfСapitalization = $body->frequencyOfСapitalization;  
        $this->clientId = $body->clientId;
    }

    function getOpenDate() {
        return $this->openDate;
    }

    function setOpenDate($openDate) {
        $this->openDate = $openDate;
    }

    function getCloseDate() {
        return $this->closeDate;
    }

    function setCloseDate($closeDate) {
        $this->closeDate = $closeDate;
    }

    function getPeriod() {
        return $this->period;
    }

    function setPeriod($period) {
        $this->period = $period;
    }

    function getBet() {
        return $this->bet;
    }

    function setBet($bet) {
        $this->bet = $bet;
    }

    function getFrequencyOfСapitalization() {
        return $this->frequencyOfСapitalization;
    }

    function setFrequencyOfСapitalization($frequencyOfСapitalization) {
        $this->frequencyOfСapitalization = $frequencyOfСapitalization;
    }
    
    function getClientId() {
        return $this->clientId;
    }

    function setClientId($clientId) {
        $this->clientId = $clientId;
    }
}