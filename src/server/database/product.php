<?php
class Product
{
    public string $productId;
    public string $name;
    public string $capacityId;
    public string $typeId;
    public string $colorId;
    public string $price;
    public string $status;

    function __construct($productId, $name, $typeId, $colorId, $capacityId, $price, $status)
    {
        $this->productId = $productId;
        $this->name = $name;
        $this->capacityId = $capacityId;
        $this->typeId = $typeId;
        $this->colorId = $colorId;
        $this->price = $price;
        $this->status = $status;
    }
}
