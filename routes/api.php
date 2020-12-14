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

Route::group([
    'middleware' => 'api.auth',
    'namespace' => 'Admin'
], function () {
    Route::group([
        'prefix' => 'tag',
    
    ], function () {
    
        Route::get('/', 'AdminTagController@index')->name('index');
        Route::post('/create', 'AdminTagController@store')->name('store');
        Route::put('/update/{id}', 'AdminTagController@update')->name('update');
        Route::delete('/delete/{id}', 'AdminTagController@delete')->name('delete');
    
    });
    
    Route::group([
        'prefix' => 'category',
    
    ], function () {
    
        Route::get('/', 'AdminCategoryController@index')->name('index');
        Route::post('/create', 'AdminCategoryController@store')->name('store');
        Route::post('/upload', 'AdminCategoryController@upload')->name('upload');
        Route::put('/update/{id}', 'AdminCategoryController@update')->name('update');
        Route::delete('/delete/{id}', 'AdminCategoryController@delete')->name('delete');
        Route::post('/delete_image', 'AdminCategoryController@deleteImage')->name('delete_image');
    
    });
    
    Route::group([
        'prefix' => 'user',
    
    ], function () {
    
        Route::get('/', 'AdminUserController@index')->name('index');
        Route::post('/create', 'AdminUserController@store')->name('store');
        Route::post('/upload', 'AdminUserController@upload')->name('upload');
        Route::put('/update/{id}', 'AdminUserController@update')->name('update');
        Route::delete('/delete/{id}', 'AdminUserController@delete')->name('delete');
        Route::post('/delete_image', 'AdminUserController@deleteImage')->name('delete_image');
    
    });

    Route::delete('logout', 'AdminAuthController@logout');
    Route::post('me', 'AdminAuthController@me');
});

Route::post('login', 'Admin\AdminAuthController@login');
Route::post('register', 'Admin\AdminAuthController@register');
Route::post('forgot', 'Admin\AdminForgotController@forgot');
Route::post('reset', 'Admin\AdminForgotController@reset');

