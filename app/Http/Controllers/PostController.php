<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Support\Facades\Validator; 

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Posts/Index', ['posts' => $posts]);
    }

    public function create()
    {
        return Inertia::render('Posts/Create');
    }

    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'user_id' => auth()->id(),
            'title' => ['required', 'min:5'],
            'slug' => ['nullable'],
            'url' => ['nullable', 'url'],
            'content' => ['required', 'min:10'],
        ])->validate();

        Post::create($request->all());

        return redirect()->route('posts.index');
    }

    public function edit(Post $post)
    {
        return Inertia::render('Posts/Edit', [
            'post'=> $post
        ]);
    }

    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'user_id' => auth()->id(),
            'title' => ['required', 'min:5'],
            'slug' => ['nullable'],
            'url' => ['nullable', 'url'],
            'content' => ['required', 'min:10'],
        ])->validate();

        Post::find($id)->update($request->all());

        return redirect()->route('posts.index');
    }

    public function destroy($id)
    {
        Post::find($id)->delete();

        return redirect()->route('posts.index');
    }

}
