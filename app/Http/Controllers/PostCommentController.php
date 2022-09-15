<?php

namespace App\Http\Controllers;


use App\Models\Post;
use Inertia\Inertia;
use App\Models\Comment;
use Illuminate\Http\Request;

class PostCommentController extends Controller
{
    public function store(Request $request, Comment $comment){

        $request->validate([
            'content' => 'required|max:10000|min:1',
        ]);

        Comment::create([
            'user_id' => auth()->id(),
            'post_id' => auth()->id(),
            'content' => $request->content,
        ])->save();

        return back();
    }

}
