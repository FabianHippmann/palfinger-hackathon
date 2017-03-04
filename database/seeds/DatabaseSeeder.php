<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::transaction(function () {
            
            $this->call(UsersTableSeeder::class);
            $this->call(VehiclesSeeder::class);
            $this->call(OperatorsSeeder::class);
            $this->call(JourneysSeeder::class); 
            $this->call(DeliveryNotesSeeder::class); 
        }, 1);

    }
}
