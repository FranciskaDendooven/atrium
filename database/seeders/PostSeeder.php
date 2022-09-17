<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::create([   
            'user_id' =>'151',
            'title' => "Just your regular random Post here ",
            'content' => "Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Animi assumenda rem dolore
            placeat ut adipisci magni earum sit officiis
            ipsa! Quidem ipsum quaerat dolor. Pariatur nulla",
        ]);
    }
}
