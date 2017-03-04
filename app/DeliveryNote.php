<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DeliveryNote extends Model
{
    protected $casts = [
    	'additional_info' => 'array'
    ];
}
