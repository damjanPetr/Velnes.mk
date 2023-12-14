<?php

namespace Database\Seeders;

use App\Models\Saloon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SaloonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Saloon::query()->create([
            "name" => "Saloon 1",
        ]);
        Saloon::query()->create([
            "name" => "Saloon 2",
        ]);
    }
}
