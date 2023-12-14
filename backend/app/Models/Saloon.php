<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Saloon extends Model
{
    protected $fillable = [
        'name',
    ];
    use HasFactory;
    public function users()
    {
        return $this->hasMany(User::class);
    }
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }
}
