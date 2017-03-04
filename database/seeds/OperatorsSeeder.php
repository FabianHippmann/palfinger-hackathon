<?php

use Illuminate\Database\Seeder;
use App\Operator; 
class OperatorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Operator::create([
       		'vehicle_id' => 1,
       		'user_id' => 1,
       		'name' => 'test'
       	]); 
    }
}
