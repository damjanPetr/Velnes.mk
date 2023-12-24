<?php

namespace Database\Seeders;

use App\Models\Service;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Service::factory()->count(10)->create()->each(function ($service) {

            DB::table('service_user')->insert([
                'service_id' => $service->id,
                'user_id' => User::all()->random()->id,
            ]);

        });

    }
}
