<?php

namespace App\Http\Controllers;


use App\Models\Post;
use Inertia\Inertia;
use App\Models\Comment;
use Illuminate\Http\Request;

class PostCommentController extends Controller
{

      public function show()
      {
          $posts = Post::with('comments')->get();
          return Inertia::render('Posts/Index', ['posts' => $posts]);
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

        return back();
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
