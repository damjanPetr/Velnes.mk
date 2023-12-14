<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{


    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'phone',
    ];

    public function customer_group()
    {
        return $this->belongsTo(CustomerGroup::class);
    }
    use HasFactory;
}
