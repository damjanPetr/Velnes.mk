<?php

namespace Database\Factories;

use App\Models\Appointment;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'appointment_id' => Appointment::all()->random()->id,
            'price' => fake()->numberBetween(10, 100),
            'duration' => fake()->randomElement([
                '00::15',
                '00::30',
                '00::45',
                '01::00',
            ]),

        ];
    }
}
