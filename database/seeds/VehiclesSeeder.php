<?php

use Illuminate\Database\Seeder;
use App\Vehicle; 
class VehiclesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Vehicle::create([
        	'name' => 'Kraninator 5000'
        	]); 
    }
}
