<?php

try {
    $pdo = new PDO('codersbay-nation.c9mh1sytq7cn.eu-central-1.rds.amazonaws.com:3306', 'root', 'codersbayroot');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();#
}
