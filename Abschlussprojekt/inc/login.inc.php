<?php

try {
    $pdo = new PDO('mysql:host=codersbay-nation.c9mh1sytq7cn.eu-central-1.rds.amazonaws.com:3306;dbname=otterbaeck', 'root', 'codersbayroot');
} catch (PDOException $e) {

    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}