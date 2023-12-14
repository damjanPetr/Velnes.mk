<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;





class Appointment extends Model
{
    protected $fillable = [
        'date'
    ];
    use HasFactory;

    public function saloon()
    {
        return $this->belongsTo(Saloon::class);
    }
    public function resources()
    {
        return $this->hasMany(Resource::class);
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }

}
