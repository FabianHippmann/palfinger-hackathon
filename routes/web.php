<?php

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

use App\Log;
use App\SupportTicket; 
use App\Journey; 
use App\DeliveryNote; 
Route::get('/', function () {
    
    return view('welcome'); 
});
Route::get('/ajax/dashboard', function(){
    $logs = Log::all(); 
    $supportTickets = SupportTicket::all(); 
    $journey = Journey::first(); 

	return view('dashboard',compact('logs','support', 'journey', 'supportTickets')); 
});
