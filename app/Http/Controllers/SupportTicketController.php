<?php

namespace App\Http\Controllers;

use App\SupportTicket;
use Illuminate\Http\Request;
use Auth; 
class SupportTicketController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {   
        Auth::loginUsingId(1); 
        $formData = $request->except('user_id'); 
        
        $formData['user_id'] = Auth::user()->id; 

        $supportTicket = SupportTicket::create($formData);
        return $supportTicket;  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SupportTicket  $supportTicket
     * @return \Illuminate\Http\Response
     */
    public function show(SupportTicket $supportTicket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\SupportTicket  $supportTicket
     * @return \Illuminate\Http\Response
     */
    public function edit(SupportTicket $supportTicket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SupportTicket  $supportTicket
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SupportTicket $supportTicket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SupportTicket  $supportTicket
     * @return \Illuminate\Http\Response
     */
    public function destroy(SupportTicket $supportTicket)
    {
        //
    }
}
