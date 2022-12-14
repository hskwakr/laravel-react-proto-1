<?php

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

Route::middleware('api')->group(function () {
    Route::get('posts', [App\Http\Controllers\Api\PostController::class, 'index']);
    Route::post('post/create', [App\Http\Controllers\Api\PostController::class, 'create']);
    Route::post('edit', [App\Http\Controllers\Api\PostController::class, 'edit']);
    Route::post('update', [App\Http\Controllers\Api\PostController::class, 'update']);
    Route::post('delete', [App\Http\Controllers\Api\PostController::class, 'delete']);
});
