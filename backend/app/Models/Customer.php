<?php

namespace App\Models;

use App\Models\Appointment;
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
    public function appointment()
    {

        return $this->hasMany(Appointment::class);
    }
    use HasFactory;
}
