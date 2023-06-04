<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\JWTAuthController;

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

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    $router->withoutMiddleware(['csrf']);
    $router->post('register', [JWTAuthController::class, 'register']);
    $router->post('login', [JWTAuthController::class, 'login']);
    $router->post('logout', [JWTAuthController::class, 'logout']);
    $router->post('refresh', [JWTAuthController::class, 'refresh']);
    $router->get('user-profile', [JWTAuthController::class, 'userProfile']);
});

Route::get('/csrf', function(){
    return csrf_token();
});


