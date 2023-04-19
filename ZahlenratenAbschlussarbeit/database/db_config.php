<?php
try {
    $pdo = new PDO('mysql:host=localhost:3306;dbname=zahlenraten', 'root', '');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}