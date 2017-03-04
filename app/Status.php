<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $fillable = ['code', 'cause', 'solution', 'short_description']; 
}
