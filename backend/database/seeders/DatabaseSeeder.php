<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Saloon;
use App\Models\User;
use Illuminate\Database\Seeder;
use Nette\Utils\Random;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        $this->call([
            SaloonSeeder::class,
        ]);
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'saloon_id' => 1
        ]);
        User::factory()->count(10)->create([
        ]);

        $this->call([
            CustomerGroupSeeder::class,
            CustomerSeeder::class,
            ToolSeeder::class,
            AppointmentSeeder::class,
            ProductCategorySeeder::class,
            ProductSeeder::class,
            ResourceSeeder::class,
            RoomSeeder::class,
            ServiceSeeder::class,
        ]);
    }
}
