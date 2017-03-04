<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
   protected $fillable = ['question', 'answer', 'journey_id']; 
}
