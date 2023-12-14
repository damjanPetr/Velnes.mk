<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'appointmentId' => $this->appointment_id,
            'duration' => $this->duration,
            'name' => $this->name,
            'price' => $this->price,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at
        ];
    }
}
