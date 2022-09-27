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
        $posts = Post::orderBy('updated_at', 'DESC')
            ->with(['comments'])
            ->with('comments.user')
            ->with('user')
            ->get();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'posts' => $posts
        ]);
    }
}
