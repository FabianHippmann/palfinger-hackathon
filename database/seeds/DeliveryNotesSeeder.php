<?php

use App\DeliveryNote;
use Illuminate\Database\Seeder;
use Carbon\Carbon; 
class DeliveryNotesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DeliveryNote::create([
        	'lat' => 47.843247,
        	'long' => 13.046636,
        	'from_date' => Carbon::now(),
        	'name' => 'Erste Testfahrt',
        	'to_date' => Carbon::now()->addDays(7),
            'journey_id' => 1,
        	'additional_information' => array(
        		'street' => 'Lamprechtshausener Bundesstraße 8, 5101 Bergheim bei Salzburg, Austria'
        		)
        ]);
    }
}
