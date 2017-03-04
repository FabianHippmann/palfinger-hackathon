<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Storage;
use DB; 
class ImportErrorCodes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'palfinger:import:errorcodes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $file = Storage::get('data/errorcodes.json');

        $statusCodes = collect(json_decode($file, true));
        if (json_last_error() != JSON_ERROR_NONE) {
            $this->error('JSON file not valid');
            return;
        }

        $statusCodes->transform(function($item, $key){
            return [
                'code' => $item['codeNumber'],
                'short_description' => $item['shortDescriptionPaldiag'],
                'cause' => $item['causePaldiag'],
                'solution' => $item['solutionPaldiag'],
            ];
        });
        $this->info('built codes'); 
        DB::table('statuses')->insert($statusCodes->toArray()); 

    }

}
