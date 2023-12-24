<?php

namespace App\Http\Controllers;

use App\Http\Resources\AppointmentResource;
use App\Models\Appointment;
use App\Models\Resource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


        return AppointmentResource::collection(Appointment::with('services')->with('resources')->where('saloon_id', auth()->user()->saloon_id)->get());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $jsonOdject = $request->json()->all();


        DB::transaction(function () use ($jsonOdject) {
            $appointment = Appointment::query()->create([
                'saloon_id' => auth()->user()->saloon_id,
                'date' => $jsonOdject['date'],
                'buffer_time' => $jsonOdject['bufferTime'],
                'customer_id' => $jsonOdject['customer'],
            ]);



            if ($jsonOdject['resources']) {
                $resources = $jsonOdject['resources'];
                foreach ($resources as $item) {
                    $appointment->resources()->create([
                        'saloon_id' => auth()->user()->saloon_id,
                        'appointment_id' => $appointment->id,
                        'room' => $item['room'] ?? "testRoom",
                        'tool_1' => $item['tool1'] ?? "test1",
                        'tool_2' => $item['tool2'] ?? "test2",
                    ]);
                }
            }

            // if ($jsonOdject['services']) {
            //     $services = $jsonOdject['services'];
            //     foreach ($services as $item) {
            //         $details = $item['details'];
            //         $employees = $item['employees'];
            //         $appointment->services()->create([
            //             'saloon_id' => auth()->user()->saloon_id,
            //             'name' => $details['name'],
            //             'duration' => $details['duration'],
            //             'price' => $details['price'],
            //         ]);

            //         $appointment->services()->users()->create([
            //             'saloon_id' => auth()->user()->saloon_id,
            //             'user_id' => $employees[0]['value'],
            //         ]);
            //     }
            // }
        });


    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {

        return new AppointmentResource($appointment);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Appointment $appointment)
    {



    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
