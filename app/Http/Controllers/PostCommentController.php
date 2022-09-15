<?php

namespace App\Http\Controllers;


use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostCommentController extends Controller
{
    public function store(Request $request, Post $post){

        $request->validate([
            'content' => 'required|max:10000|min:1',
        ]);

        $post->comments->create([
            'user_id' => auth()->id(),
            'content' => Request::input('content')
        ])->save();

        return back();
    }

}
