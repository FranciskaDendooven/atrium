<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostController;

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

Route::resource('posts', PostController::class);

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

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

Route::get('/userProfile', function () {
    return Inertia::render('UserProfile');
})->middleware(['auth', 'verified'])->name('userProfile');

Route::get('/userSettings', function () {
    return Inertia::render('UserSettings');
})->middleware(['auth', 'verified'])->name('userSettings');


<<<<<<< HEAD

=======
>>>>>>> de0bd5e2f4372c1bb690ab90a844d40c01b1a431
require __DIR__.'/auth.php';
