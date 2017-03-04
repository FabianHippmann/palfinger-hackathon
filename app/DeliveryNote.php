<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeliveryNote extends Model
{
    protected $casts = [
    	'additional_information' => 'array'
    ];
     public function journey()
    {
        return $this->belongsTo('App\Journey');
    }
}
