<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('updated_at', 'DESC')->get();
        return Inertia::render('Posts/Index', ['posts' => $posts]);
    }

    public function showUser($id)
    {
        $user = User::find($id);
        $posts = $user->posts;
        return view('posts.user')->with("user", $user)->with('title', $posts);
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
        ]);

        Post::create([
            'user_id' => auth()->user()->id,
            'title' => $request->title,
            'content' => $request->content,
            'tag' => $request->tag,
        ]);

        return redirect()->route('posts.index');
        
    }


    public function edit($id)
    {
        $post = Post::find($id);

        // if($posts -> save()){
        // return response()->json(["status" => 200]);
        // }

        return Inertia::render('Posts/Edit', [
            'post'=> $post
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
        $post->title =$request->title;
        $post->content =$request->content;
        $post->tag =$request->tag;
        $post->save();

        return redirect()->route('posts.index');
    }

    public function destroy($id)
    {
        // confirmation!
        Post::find($id)->delete();

        // if($posts -> delete()){
        // return response()->json(["status" => 200]);
        // }

        return redirect()->route('posts.index');
    }

}
 