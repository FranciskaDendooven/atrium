<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    public function save(array $options = array())
    {
        if( $this->user_id)
        {
            $this->user_id = Auth::id();
        }

        parent::save($options);
    }

    protected $fillable = [ 
        'title',
        'content',
        'tag',
    ];

}
