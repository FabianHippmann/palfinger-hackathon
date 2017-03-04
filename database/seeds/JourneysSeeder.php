<?php

use Illuminate\Database\Seeder;
use App\Journey; 
class JourneysSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Journey::create(
        	['name' => 'Die erste Zustellung', 'operator_id' => 1]
        	);
    }
}
