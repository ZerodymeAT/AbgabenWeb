<?php

try {
    $pdo = new PDO('mysql:host=codersbay-nation.c9mh1sytq7cn.eu-central-1.rds.amazonaws.com:3306', 'root', 'codersbayroot');
} catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}


$mysqli = new mysqli("codersbay-nation.c9mh1sytq7cn.eu-central-1.rds.amazonaws.com:3306","root","codersbayroot","otterbaeck");

// Check connection
if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
}