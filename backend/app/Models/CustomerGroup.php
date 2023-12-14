<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerGroup extends Model
{
    protected $fillable = [
        'name',
        'customer_id',
    ];


    public function customer()
    {
        return $this->hasMany(Customer::class);
    }
    use HasFactory;
}
