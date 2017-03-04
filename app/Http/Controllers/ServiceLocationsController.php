<?php

namespace App\Http\Controllers;

use GooglePlaces;
use Illuminate\Http\Request;

class ServiceLocationsController extends Controller
{
    public function getNearby(Request $request)
    {

        $postdata = http_build_query(
            array(
                'language' => 'DE',
                'countryid' => 'AT',
                'partnertypes' => '4',
                'productArea' => '9',
                'PLZ' => 'Gebäude B, Am Europl., 1120 Wien, Österreich',
                'googleJSON' => json_encode(
                    array('results' => GooglePlaces::textSearch('Am Europlatz')['results'])
                ),

            )
        );
        $opts = array(
            'http' => array(
                'method' => "POST",
                'header' => 'Content-type: application/x-www-form-urlencoded',

                'content' => $postdata,

            ),
        );

        $context = stream_context_create($opts);

// Open the file using the HTTP headers set above
        $file = file_get_contents('https://extranet.palfinger.com/DealerSearch/Usermanagement/SearchPartnerOfCountry', false, $context);
        return response()->json(json_decode($file));
    }
}
