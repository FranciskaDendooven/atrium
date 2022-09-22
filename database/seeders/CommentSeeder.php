<?php

namespace Database\Seeders;

use App\Models\Comment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Comment::create([
                'user_id' => "51",        
                'post_id' => "101",
                'content' => "Well you know this becodian is too looney! You can tell he/she his a bit of a wacko, who writes code this way ?!",
            ]);
    }
}
