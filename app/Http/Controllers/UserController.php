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
        //dd($id);
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
        //dd('does it get here');
        //dd($request);

            # Validation
            $request->validate([
                'current_password' => 'required',
                'new_password' => 'required',
                'password_confirmation' => 'required',
            ]);

            dd('does it get here');

            #Match The Old Password
            if(!Hash::check($request->current_password, auth()->user()->password)){
                return back()->with("error", "Previous Password Doesn't match!");
            }
            
        
            #Update the new Password
            User::whereId(auth()->user()->id)->update([
                'password' => Hash::make($request->new_password)
            ]);
    
            return back()->with("status", "Password changed successfully!");
    }

}
