<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostCommentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\WelcomeController;

// Route::resource('posts', PostController::class);


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [WelcomeController::class, 'load'])->name('loadWelcome');

Route::get('/Posts', [PostController::class, 'show'])->name('showPosts');

Route::get('/Posts/comment', [PostCommentController::class, 'show'])->middleware(['auth', 'verified'])->name('showPostsComments');
Route::post('/Posts/comment', [PostCommentController::class, 'store'])->middleware(['auth', 'verified'])->name('submitNewComment');

Route::post('/Posts/remove/{id}', [PostController::class, 'destroy'])->middleware(['auth', 'verified'])->name('deleteAction');

Route::get('/Posts/create', [PostController::class, 'create'])->middleware(['auth', 'verified'])->name('showCreatePost');
Route::post('/Posts/create', [PostController::class, 'store'])->middleware(['auth', 'verified'])->name('submitNewPost');

Route::get('/Posts/update/{id}', [PostController::class, 'edit'])->middleware(['auth', 'verified'])->name('showUpdatedPost');
Route::put('/Posts/update/{id}', [PostController::class, 'update'])->middleware(['auth', 'verified'])->name('submitUpdatedPost');



Route::get('/codeQA', function () {
    return Inertia::render('CodeQA');
})->name('codeQA');

Route::get('/codeShare', function () {
    return Inertia::render('CodeShare');
})->name('codeShare');

Route::get('/brainFarts', function () {
    return Inertia::render('BrainFarts');
})->name('brainFarts');

Route::get('/pif', function () {
    return Inertia::render('Pif');
})->name('pif');

Route::get('/techNews', function () {
    return Inertia::render('TechNews');
})->name('techNews');

Route::get('/bots', function () {
    return Inertia::render('Bots');
})->name('Bots');

Route::get('/userprofile', [PostController::class, 'showAllUserPosts'])->middleware(['auth', 'verified'])->name('userProfile');

Route::get('/editUserSettings/{id}', [UserController::class, 'edit'])->middleware(['auth', 'verified'])->name('showEditUserSettings');
Route::post('/editUserSettings/{id}', [UserController::class, 'update'])->middleware(['auth', 'verified'])->name('submitNewUserSettings');

Route::get('/ChangePassword', [UserController::class, 'changePassword'])->middleware(['auth', 'verified'])->name('changePassword');
Route::post('/ChangePassword', [UserController::class, 'updatePassword'])->middleware(['auth', 'verified'])->name('updatePassword');
Route::get('/userSettings', function () {
    return Inertia::render('UserSettings');
})->name('userSettings');

require __DIR__.'/auth.php';
