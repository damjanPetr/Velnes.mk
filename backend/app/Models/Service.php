<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{

    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'saloon_id',
        'duration',
        'appointment_id'
    ];


    public function appointments()
    {
        return $this->belongsTo(Appointment::class);
    }

    public function saloon()
    {
        return $this->belongsTo(Saloon::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'service_user', 'service_id', 'user_id');
    }
}

