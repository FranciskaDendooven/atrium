<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;


class UserController extends Controller
{

    public function edit($id)
    {
        $user = User::find($id);

        return Inertia::render('EditUserSettings', [
            'user'=> $user
        ]);
    }


    public function update(Request $request, $id)
    {
        //dd($id);
        $request->validate([
            'username' => 'required|max:255|min:1',
            'email' => 'required|max:10000|min:1',
            'password' => 'required',
        ]);

        $user = User::find($id);
        $user->username = $request->username;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();

        return redirect()->route('userSettings');
    }

}
