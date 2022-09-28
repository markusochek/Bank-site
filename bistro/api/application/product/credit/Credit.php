<?php 
class Credit {

    private $openDate;
    private $closeDate;
    private $period;
    private $sum;
    private $paymentSchedule;
    private $clientId;

    function __construct($body) {
        $this->openDate = $body->openDate;
        $this->closeDate = $body->closeDate;
        $this->period = $body->period;
        $this->sum = $body->sum;  
        $this->paymentSchedule = $body->paymentSchedule;  
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

    function getSum() {
        return $this->sum;
    }

    function setSum($sum) {
        $this->sum = $sum;
    }

    function getPaymentSchedule() {
        return $this->paymentSchedule;
    }

    function setPaymentSchedule($paymentSchedule) {
        $this->paymentSchedule = $paymentSchedule;
    }
    
    function getClientId() {
        return $this->clientId;
    }

    function setClientId($clientId) {
        $this->clientId = $clientId;
    }
}