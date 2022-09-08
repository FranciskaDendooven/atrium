<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;

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
        $newPost = Post::create([
            'user_id' => auth()->user()->id,
            'title' => $request->title,
            'content' => $request->content,
            'tag' => $request->tag,
        ])->validate();

        // if($newPost){
        // return response()->json(["status" => 200]);
        // }

        return redirect()->route('posts.index');
        
    }


    public function edit($id)
    {
        $posts = Post::find($id);

        // if($posts -> save()){
        // return response()->json(["status" => 200]);
        // }

        return Inertia::render('Posts/Edit', [
            'posts'=> $posts
        ]);
    }

    public function update(Request $request, $id)
    {
        $posts = Post::find($id)->validate();
        $posts->title =$request->title;
        $posts->content =$request->content;
        $posts->tag =$request->tag;

        // if($posts -> save()){
        // return response()->json(["status" => 200]);
        // }
        return redirect()->route('posts.index');
    }

    public function destroy($id)
    {
        Post::find($id)->delete();

        // if($posts -> delete()){
        // return response()->json(["status" => 200]);
        // }

        return redirect()->route('posts.index');
    }

}
 