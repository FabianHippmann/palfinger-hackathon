<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Status; 
class ErrorCodeController extends Controller
{
    
    public function getErrorCode(Request $request){

    	return Status::where('code', $request->errorcode)->first(); 
    	 
    }
}
