<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;

class Vote extends Model
{
    use HasFactory;

    public function users()
    {
     return $this->belongsTo(User::class, 'user_id'); 
    }

    public function comments()
    {
        return $this->belongsTo(Comment::class);
    }

    public function posts()
    {
        return $this->belongsTo(Post::class);
    }

}
