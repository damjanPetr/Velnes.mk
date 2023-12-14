<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Saloon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->words(3, true),
            'price' => fake()->numberBetween(10, 250),
            'stock' => fake()->numberBetween(0, 130),
            'saloon_id' => Saloon::query()->select('id')->inRandomOrder()->first()->id

        ];
    }
}
