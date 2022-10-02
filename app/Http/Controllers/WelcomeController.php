<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Models\Post;


class WelcomeController extends Controller
{
    public function load()
    {
        $techPost = Post::latest('updated_at')
            ->where('page', 'TechNews')
            ->with(['comments'])
            ->with('comments.user')
            ->with('user')
            ->first();
        $CodeSharePost = Post::latest('updated_at')
            ->where('page', 'Code Share')
            ->with(['comments'])
            ->with('comments.user')
            ->with('user')
            ->first();
        $pifPost = Post::latest('updated_at')
            ->where('page', 'PIF')
            ->with(['comments'])
            ->with('comments.user')
            ->with('user')
            ->first();
        $brainFartsPost = Post::latest('updated_at')
            ->where('page', 'BrainFarts')
            ->with(['comments'])
            ->with('comments.user')
            ->with('user')
            ->first();
        $codeQAPost = Post::latest('updated_at')
            ->where('page', 'CodeQA')
            ->with(['comments'])
            ->with('comments.user')
            ->with('user')
            ->first();

        $posts = [];
        array_push($posts, $techPost, $CodeSharePost, $pifPost, $brainFartsPost, $codeQAPost);

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'posts' => $posts
        ]);
    }
}
