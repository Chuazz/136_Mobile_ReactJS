<?php

header('Access-Control-Allow-Origin: *');

require("../database/product.php");
require("../functions/index.php");
require '../dbConfig.php';

class Color
{
    public $linkTo;
    public $value;
    public $label;
    public $imgPath;

    public function __construct($linkTo, $value, $label, $imgPath)
    {
        $this->$linkTo = $linkTo;
        $this->$value = $value;
        $this->$label = $label;
        $this->imgPath = $imgPath;
    }
}

class Capacity
{
    public $label;
    public $value;
    public $price;
    public $colors;

    public function __construct($label, $value, $price, $colors)
    {
        $this->label = $label;
        $this->value = $value;
        $this->price = $price;
        $this->colors = $colors;
    }
}

class Test
{
    public $name;
    public $capacities;

    public function initial($name, $capacities)
    {
        $this->name = $name;
        $this->capacities = $capacities;
    }
}

$getAll = ("SELECT DISTINCT
                *
            FROM
                product
            ");

$getName = ("SELECT DISTINCT
                name
            FROM 
                product");

$products = getData($getAll)->fetchAll(PDO::FETCH_ASSOC);
$names = getData($getName)->fetchAll(PDO::FETCH_ASSOC);

$results = [];

$data = array(new Test());


foreach ($names as $i => $name) {
    foreach ($products as $j => $product) {
        if (isNameExists("iPhone 14 Pro Max", $products)) {
        }
    }
}
