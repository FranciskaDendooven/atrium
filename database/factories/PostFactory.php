<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $pages=['CodeQA','CodeShare','PIF','TechNews', 'BrainFarts',];
        return [      
            'user_id' => fake()->numberBetween(1, 150),
            'title' => fake()->unique()->realText($maxNBChars = 30),
            'content' => fake()->realText($maxNBChars = 300),
            'tag' =>fake()->realText($maxNBChars = 20),
            'page' =>$pages[fake()->numberBetween(0, 4)],
        ];
    }
}
