<?php

namespace App\Http\Controllers\Admin;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AdminUserController extends Controller
{
    public function index()
    {
        try {
            $users = User::latest()->paginate(10);


            return response()->json([
                'status' => 200,
                'users' => $users,
            ], 200);

        } catch (\Throwable $e) {

            return response()->json([
                'status' => 422,
                'message' => $e->getMessage(),
            ], 422);
        }
    }
    
    public function store(Request $request)
    {
        try {

            $this->validate($request,[
                'name' => 'required',
                'password' => 'bail|required|min:6',
                'email' => 'bail|required|email',
                
            ]);

            // dd($request->all());

            $user = $this->saveUser($request);

        
            return response()->json([
                'status' => 200,
                'user' => $user,
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => 422,
                'message' => $e->getMessage(),
            ], 422);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $this->validate($request,[
                'name' => 'required',
                'password' => 'bail|required|min:6',
                'email' => 'bail|required|email',
                
            ]);

            $user = $this->saveUser($request, $id);

            return response()->json([
                'status' => 200,
                'message' => 'success',
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 422,
                'message' => $e->getMessage(),
            ], 422);
        }
           
            
    }

    public function saveUser($request, int $id = null)
    {

        return User::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'name' => $request->name,
                'password' => Hash::make($request->password),
                'email' => $request->email,
                'userType' => $request->userType,
            ]

        );
    }

    public function delete($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();

        
            return response()->json([
                'status' => 200,
                'message' => 'success',
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => 500,
                'message' => 'err',
            ], 500);
        }
    }
}
