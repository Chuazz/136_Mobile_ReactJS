<?php
class Color
{
    public $linkTo;
    public $label;
    public $value;
    public $imgPath;

    function __construct($linkTo, $label, $value, $imgPath)
    {
        $this->linkTo = $linkTo;
        $this->label = $label;
        $this->value = $value;
        $this->imgPath = $imgPath;
    }
}
