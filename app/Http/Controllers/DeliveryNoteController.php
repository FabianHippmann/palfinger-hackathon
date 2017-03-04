<?php

namespace App\Http\Controllers;

use App\DeliveryNote;
use Illuminate\Http\Request;
use Auth; 
class DeliveryNoteController extends Controller
{
    public function latest(){
    	Auth::loginUsingId(1);
    	dd(Auth::user()->operators());  
        return Auth::user()->operators()->latest()->journey->delivery_note; 
    }
}
