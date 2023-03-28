<?php

require_once(__dir__ . '/Controller.php');
require_once('./Model/RegisterModel.php');

class Register extends Controller
{

    public $active = 'Register';
    private $registerModel;

    public function __construct()
    {
        if (isset($_SESSION['auth_status'])) header("Location: dashboard.php");
        $this->registerModel = new RegisterModel();
    }

    public function register(array $data)
    {
        $name = stripcslashes(strip_tags($data['name']));
        $email = stripcslashes(strip_tags($data['email']));
        $username = stripcslashes(strip_tags($data['username']));
        $password = stripcslashes(strip_tags($data['password']));

        $EmailStatus = $this->registerModel->fetchUser($email)['status'];

        $Error = array(
            'name' => '',
            'email' => '',
            'username' => '',
            'password' => '',
            'status' => false
        );

        if (preg_match('/[^A-Za-z\s]/', $name)) {
            $Error['name'] = 'Only Alphabets are allowed';
            return $Error;
        }
        if (!empty($EmailStatus)) {
            $Error['email'] = 'Sorry, This Email adress has been taken.';
            return $Error;

        }
        if (preg_match('/[^A-Za-z\s]/', $username)) {
            $Error['phone'] = 'Only Alphabets are allowed';
            return $Error;
        }
        if (strlen($password) < 7) {
            $Error['password'] = 'Please, use a stronger password.';
            return $Error;
        }

        $Payload = array(
            'name' => $name,
            'email' => $email,
            'username' => $username,
            'password' => password_hash($password, PASSWORD_BCRYPT)
        );

        $Response = $this->registerModel->createUser($Payload);

        $Data = $this->registerModel->fetchUser($email)['data'];
        unset($Data['password']);

        if (!$Response['status']) {
            $Response['status'] = 'Sorry, an unexpected error occurred, Please contact SysAdmin. Haha :P ';
            return $Response;
        }
        $_SESSION['data'] = $Data;
        $_SESSION['auth_status'] = true;
        header("Location: dashboard.php");
        return true;
    }
}

?>
