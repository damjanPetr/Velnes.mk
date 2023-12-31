<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\Saloon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'date' => fake()->date(),
            'customer_id' => Customer::all()->random()->id,
            'saloon_id' => Saloon::all()->random()->id
        ];
    }
}
