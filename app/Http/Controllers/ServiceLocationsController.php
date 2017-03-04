<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GooglePlaces; 
class ServiceLocationsController extends Controller
{
    public function getNearby(Request $request)
    {
       return GooglePlaces::textSearch('Am Europlatz');
    }
}
