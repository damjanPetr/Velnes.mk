<?php

namespace Database\Seeders;

use App\Models\Customer;
use App\Models\CustomerGroup;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CustomerGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CustomerGroup::factory(10)->create();
    }
}
