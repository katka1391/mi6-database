<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function store(Request $request){
        $this->validate($request, [
            'name'=>'required|min:3|max:255'
        ]);

//        return $request->all();

        return [
            'status' => 'success',
            'message' => 'I was success'
        ];
    }
}
