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
        $comments = Comment::orderBy('updated_at', 'DESC')->get();
        return Inertia::render('Posts/Index', ['comments' => $comments]);
    }

    public function store(Request $request){

        $request->validate([
            'username' => 'required|min:1',
            'content' => 'required|max:10000|min:1',
        ]);

        Comment::create([
            'user_id' => auth()->id(),
            'post_id' => $request->id,
            'username' => $request->username,
            'content' => $request->content,
        ])->save();

        return redirect()->back();
    }

    // public function toArray(Request $request)
    // { 
    //   return [
    //     'id' => $this->id,
    //     'username' => $this->user_id,
    //     'content' => $this->content,
    //     'created_at' => (string) $this->created_at,
    //   ];
    // }

}
