<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServiceLocationsController extends Controller
{
    public function getNearby(Request $request)
    {
        return json_decode('{"results":[{"address_components":[{"long_name":"Gebäude B","short_name":"Gebäude B","types":["premise"]},{"long_name":"Am
Europlatz","short_name":"Am Europl.","types":["route"]},{"long_name":"Meidling","short_name":"Meidling","types":["political","sublocality","sublocality_level
_1"]},{"long_name":"Wien","short_name":"Wien","types":["locality","political"]},{"long_name":"Wien","short_name":"Wien","types":["administrative_area_level_1
","political"]},{"long_name":"Österreich","short_name":"AT","types":["country","political"]},{"long_name":"1120","short_name":"1120","types":["postal_code"]}
],"formatted_address":"Gebäude B, Am Europl., 1120 Wien, Österreich","geometry":{"bounds":{"northeast":{"lat":48.1709071,"lng":16.3345964},"southwest":{"lat"
:48.17039279999999,"lng":16.3337442}},"location":{"lat":48.1705947,"lng":16.3341057},"location_type":"ROOFTOP","viewport":{"northeast":{"lat":48.171998930291
49,"lng":16.3355192802915},"southwest":{"lat":48.16930096970849,"lng":16.3328213197085}}},"place_id":"ChIJe1hgTkGobUcR7iARD0sKhac","types":["premise"]}],"sta
tus":"OK"}');
        

    }
}
