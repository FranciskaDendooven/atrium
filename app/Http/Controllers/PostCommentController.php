<?php

namespace App\Http\Controllers;


use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Facades\Request;

class PostCommentController extends Controller
{
    public function store(Post $post){

        $post->comments->create([
            'user_id' => auth()->id(),
            'content' => Request::input('content')
        ]);

        return back();
    }

}
