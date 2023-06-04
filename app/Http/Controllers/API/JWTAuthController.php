<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Http\Middleware\Authenticate;
use App\Models\User;
use Tymon\JWTAuth\Factory;



class JWTAuthController extends Controller
{
    public function __construct()
    {
        $this->middleware(Authenticate::class, ['except' => ['login', 'register']]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|between:2,100',
            'surname' => 'required|between:2,100',
            'email' => 'required|email|unique:users|max:50',
            'password' => 'required|confirmed|string|min:6',
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'ok' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 400);
        }
    
        $user = User::where('email', $request->email)->first();
        if ($user) {
            return response()->json([
                'message' => 'User already exists with this email address'
            ], 409);
        }
    
        $user = User::create(array_merge(
            $validator->validated(),
                ['password' => bcrypt($request->password)]
            ));
        

        return response()->json([
            'ok' => true,
            'message' => 'Successfully registered',
            'user' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6'
        ]);

        if ($validator->fails())
            return response()->json($validator->errors, 422);
        
        if (!$token = auth()->attempt($validator->validated()))
        {
            return response()->json(["ok" => false, 'error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    public function userProfile()
    {
        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return response()->json($user);
    }

    public function profile()
    {
        $user = auth()->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        else{return "ok";}
        return response()->json($user);
    }

    private function createNewToken($token)
    {
        $ttl = config('jwt.ttl');
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $ttl * 60 * 24
        ]);
    }
    
}
