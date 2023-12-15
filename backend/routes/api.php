<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ResourceController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ToolController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources([
    'products' => ProductController::class,
    'services' => ServiceController::class,
    'resources' => ResourceController::class,
    'customers' => CustomerController::class,
    'appointments' => AppointmentController::class,
    'rooms' => RoomController::class,
    'tools' => ToolController::class
]);

Route::get('users', function (Request $request) {

    $users = User::where('saloon_id', auth()->user()->saloon_id)->get()->map(function ($user) {
        return [
            'id' => $user->id,
            'name' => $user->name,
            "email" => $user->email,
            "saloonId" => $user->saloon_id,
            "createdAt" => $user->created_at,
            "updatedAt" => $user->updated_at,
        ];
    });

    return response()->json([
        'data' => $users->toArray()
    ]);
});

