<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'price',
        'stock',
        'stock_value',
        'saloon_id'
    ];
    public function productCategory()
    {

        return $this->belongsTo(ProductCategory::class);
    }

    use HasFactory;
}
