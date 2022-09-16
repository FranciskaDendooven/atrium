<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostCommentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




// Route::resource('posts', PostController::class);


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/Posts', [PostController::class, 'show'])->name('showPosts');
Route::post('/Posts/comment', [PostCommentController::class, 'store'])->name('showPostsComments');

Route::post('/Posts/remove/{id}', [PostController::class, 'destroy'])->name('deleteAction');

Route::get('/Posts/create', [PostController::class, 'create'])->name('showCreatePost');
Route::post('/Posts/create', [PostController::class, 'store'])->name('submitNewPost');

Route::get('/Posts/update/{id}', [PostController::class, 'edit'])->name('showUpdatedPost');
Route::put('/Posts/update/{id}', [PostController::class, 'update'])->name('submitUpdatedPost');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/codeQA', function () {
    return Inertia::render('CodeQA');
})->middleware(['auth', 'verified'])->name('codeQA');

Route::get('/codeShare', function () {
    return Inertia::render('CodeShare');
})->middleware(['auth', 'verified'])->name('codeShare');

Route::get('/brainFarts', function () {
    return Inertia::render('BrainFarts');
})->middleware(['auth', 'verified'])->name('brainFarts');

Route::get('/pif', function () {
    return Inertia::render('Pif');
})->middleware(['auth', 'verified'])->name('pif');

Route::get('/techNews', function () {
    return Inertia::render('TechNews');
})->middleware(['auth', 'verified'])->name('techNews');

Route::get('/userprofile', function () {
    return Inertia::render('Userprofile');
})->middleware(['auth', 'verified'])->name('userProfile');

Route::get('/userSettings', function () {
    return Inertia::render('UserSettings');
})->middleware(['auth', 'verified'])->name('userSettings');






require __DIR__.'/auth.php';
