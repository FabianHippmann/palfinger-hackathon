<?php

namespace App\Http\Controllers;

use Auth;

class DeliveryNoteController extends Controller
{
    public function latest()
    {
        Auth::loginUsingId(1);
        
        return Auth::user()->currentOperator();

    }
}
