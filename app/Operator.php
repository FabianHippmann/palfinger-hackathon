<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Operator extends Model
{
    protected $fillable = ['vehicle_id', 'name'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
  	public function journeys(){
  		return $this->hasMany('App\Journey'); 
  	}
}
