<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;


class CodeShareController extends Controller
{
    public function show()
    {
        $posts = Post::orderBy('updated_at', 'ASC')
        ->with(['comments'])
            ->with('comments.user')
            ->with('user')
            ->get();
        return Inertia::render('CodeShare', ['posts' => $posts]);
    }

    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|max:255|min:1',
            'content' => 'required|max:10000|min:1',
            'tag' => 'required',
            'page' => 'required',
        ]);


        Post::create([
            'user_id' => auth()->user()->id,
            'title' => $request->title,
            'content' => $request->content,
            'tag' => $request->tag,
            'page' => $request->page,
        ]);

        return redirect()->route('loadWelcome');
    }


    public function edit($id)
    {
        $post = Post::find($id);
        return Inertia::render('Posts/Edit', [
            'post' => $post
        ]);
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|max:255|min:1',
            'content' => 'required|max:10000|min:1',
            'tag' => 'required',
        ]);

        $post = Post::find($id);
        $post->title   = $request->title;
        $post->content = $request->content;
        $post->tag     = $request->tag;
        $post->save();

        return redirect()->route('showCodeSharePosts');
    }

    public function destroy($id)
    {
        Post::find($id)->delete();
        return redirect()->route('showCodeSharePosts');
    }
}


