<?php

namespace App\Models;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;





class Appointment extends Model
{
    protected $fillable = [
        'date',
        'saloon_id',
        'buffer_time',
        'note',
        'customer_id'
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
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

}
