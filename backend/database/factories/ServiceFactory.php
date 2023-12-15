<?php

namespace Database\Factories;

use App\Models\Appointment;
use App\Models\Saloon;
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
        $appointment = Appointment::all()->random();
        return [
            'name' => fake()->word() . fake()->randomElement(["Haircut", "Shaving", "Massage", "Manicure", "Pedicure", 'Treatment', 'Cleaning']),
            'appointment_id' => $appointment->id,
            'price' => fake()->numberBetween(10, 100),
            'saloon_id' => $appointment->saloon_id,
            'duration' => fake()->randomElement([
                '00::15',
                '00::30',
                '00::45',
                '01::00',
            ]),

        ];
    }
}
