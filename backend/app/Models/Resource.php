<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{

    protected $fillable = [
        'room',
        'tool_2',
        'tool_2',
        'appointment_id',
        'saloon_id'
    ];
    use HasFactory;


    public function appointments()
    {
        return $this->belongsTo(Appointment::class);
    }
}
