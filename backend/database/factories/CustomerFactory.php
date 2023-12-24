<?php

namespace Database\Factories;

use App\Models\Appointment;
use App\Models\CustomerGroup;
use App\Models\Saloon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customer>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'customer_group_id' => CustomerGroup::all()->random()->id,
            'saloon_id' => Saloon::all()->random()->id
        ];
    }
}
