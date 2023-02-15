<?php

function getData($querryString)
{
    require '../dbConfig.php';
    $sql = $querryString;

    $stm = $conn->prepare($sql);
    $stm->execute();

    return $stm;
}

function isNameExists($name, $array){
    foreach ($array as $key => $value) {
        if($value["name"] == $name){
            return true;
        }
    }

    return false;
}