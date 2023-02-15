<?php
class Capacity
{
    public $label;
    public $value;
    public $price;

    function __construct($label, $value, $price)
    {
        $this->label = $label;
        $this->value = $value;
        $this->price = $price;
    }
}
