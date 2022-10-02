<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
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
        $request->validate([
            'username' => 'required|max:255|min:1',
            'email' => 'required|max:10000|min:1',
        ]);

        $user = User::find($id);
        $user->username = $request->username;
        $user->email = $request->email;
        $user->save();

        return redirect()->route('userSettings');
    }

    public function changePassword()
    {
        return Inertia::render('Auth/ChangePassword');
    }

    public function updatePassword(Request $request)
    {
            # Validation
            $request->validate([
                'password' => 'required',
                'password_confirmation' => 'required',
                'current_password' => 'required',
            ]);

            #Match The Old Password
            if(!Hash::check($request->current_password, auth()->user()->password)){
                dd($request);
                return back()->with('errors' , 'Current Password does not match!');
            }
            
            #Update the new Password
            User::whereId(auth()->user()->id)->update([
                'password' => Hash::make($request->password)
            ]);
    
            return redirect()->route('userSettings')->with("message", "Password changed successfully!");
    }

}
