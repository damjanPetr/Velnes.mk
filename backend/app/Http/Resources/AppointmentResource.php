<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppointmentResource extends JsonResource
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
            'note' => $this->note,
            'bufferTime' => $this->buffer_time,
            'saloonId' => $this->saloon_id,
            'resources' => ResourceResource::collection($this->whenLoaded('resources')),
            'services' => ServiceResource::collection($this->whenLoaded('services')),
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at
        ];

    }
}
