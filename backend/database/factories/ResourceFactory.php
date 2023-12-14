<?php

namespace Database\Factories;

use App\Models\Tool;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Resource>
 */
class ResourceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'room' => $this->faker->word() . 'room',
            'tool_1' => Tool::query()->inRandomOrder()->first()->name,
            'tool_2' => Tool::query()->inRandomOrder()->first()->name,
            'appointment_id' => \App\Models\Appointment::query()->inRandomOrder()->first()->id,
            'saloon_id' => \App\Models\Saloon::query()->inRandomOrder()->first()->id
        ];
    }
}
