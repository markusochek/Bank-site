<?php 
error_reporting(-1);
require_once("application/Application.php");
header("Content-type:application/json; charset-utf-8");

Class Router {
    private $application;

    function __construct() {
        $this->application = new Application();
    } 

    public function accept($params, $body) {
        $method = $params['method'];
        if ($method) {
            switch ($method) {
                // auntification
                case 'authorization': return $this->application->authorization($body);
                case 'registration': return $this->application->registration($body);
                // cookie
                case 'setcookie': return $this->application->setcookie($body);
                case 'unsetcookie': return $this->application->unsetcookie($body);
                case 'checkcookie': return $this->application->checkcookie($body);
                // Client
                case 'addPerson': return $this->application->addPerson($body);
                // Product
                case 'addCredit': return $this->application->addCredit($body);
                case 'addContribution': return $this->application->addContribution($body);
                case 'responseCheck': return $this->application->responseCheck($body);
            }
        }
        return false;
    }

    public function answer($data) {
        if($data) {
            return array('status'=>'OK', 'response'=>$data);
        }
        return array('status'=>'ERROR');
    }
}
$router = new Router();

$json = file_get_contents('php://input');
$POST = json_decode($json, true);
$POST = (object) $POST;

echo json_encode($router->answer($router->accept($_GET, $POST)));
?>