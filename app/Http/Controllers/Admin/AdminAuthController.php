<?php

namespace App\Http\Controllers\Admin;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;

class AdminAuthController extends Controller
{
    
    public function login()
    {
        try {

            $credentials = request()->only(['email', 'password']);

            $token = auth()->attempt($credentials);

            if (!$token) {
                return response()->json([
                    'errors' => [
                        'status' => false,
                        'code' => 401,
                        'message' => 'Unauthorized',
                    ],
                ], 401);
            }

            return $this->respondWithToken($token);

        } catch (\Throwable $e) {
            return response()->json([
                'errors' => [
                    'status' => false,
                    'code' => 500,
                    'message' => $e->getMessage(),
                ],
            ], 500);
        }
    }

    public function logout()
    {
        try {

            auth()->logout();

            return response()->json([
                'status' => true,
                'code' => 200,
                'message' => 'Logout successfully',
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'errors' => [
                    'status' => false,
                    'code' => 500,
                    'message' => $e->getMessage(),
                ],
            ], 500);
        }
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function register(RegisterRequest $request)
    {
        try {

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'userType' => $request->userType,
            ]);

            return response()->json([
                'Success' => true,
                'data' => $user
            ], 200);

        } catch (\Throwable $e) {
            
            return response()->json([
                'errors' => [
                    'status' => false,
                    'code' => 500,
                    'message' => $e->getMessage(),
                ],
            ], 500);
        }
    }


    protected function respondWithToken($token)
    {
        $user = auth()->user();
        $userType = $user->userType;

        if($userType == 'user') {
            return response()->json([
                'errors' => [
                    'status' => false,
                    'code' => 401,
                    'message' => 'You are not administrator!',
                ],
            ], 401);
           
        } 
        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'user' => $user,
            'expires_in' => auth()->factory()->getTTL() * 60,
        ]);
       
        
    }
}
