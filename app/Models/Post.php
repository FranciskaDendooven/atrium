<?php

namespace App\Models;

// use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'url',
        'content',
    ];

// public function sluggable() : array
// {
//     return [
//         'slug'=>[
//             'source' => 'name'
//         ]
//         ];

// }

}
