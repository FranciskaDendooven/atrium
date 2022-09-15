<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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


    public function user(){

    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
