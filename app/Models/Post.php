<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Comment;
use App\Models\User;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'content',
        'tag',
        'soft_delete',
    ];

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id'); 
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

}
