<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Journey extends Model
{
    public function deliveryNote()
    {
        return $this->hasOne('App\DeliveryNote');
    }

}
