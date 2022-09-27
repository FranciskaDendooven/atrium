<?php

namespace App\Http\Controllers;


use App\Models\Post;
use Inertia\Inertia;
use App\Models\Comment;
use Illuminate\Http\Request;

class PostCommentController extends Controller
{

    public function showComment()
    {
        $comments = Comment::orderBy('updated_at', 'DESC')->with('user')->get();
        return Inertia::render('Posts/Index', ['comments' => $comments]);
    }

    public function store(Request $request){

        $request->validate([
            'content' => 'required|max:10000|min:1',
        ]);

        Comment::create([
            'user_id' => auth()->id(),
            'post_id' => $request->id,
            'content' => $request->content,
        ])->save();

        return redirect()->back();
    }
}
