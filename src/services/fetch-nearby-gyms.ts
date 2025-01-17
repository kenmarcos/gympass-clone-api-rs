import { Gym } from "@prisma/client";
import { GymsRepository } from "@/repositories/gyms-repository";

interface FetchNearbyGymsServiceRequest {
  userLatitude: number;
  userLongitude: number;
}

interface FetchNearbyGymsServiceResponse {
  gyms: Gym[];
}

export class FetchNearbyGymsService {
  constructor(private gymRepository: GymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearbyGymsServiceRequest): Promise<FetchNearbyGymsServiceResponse> {
    const gyms = await this.gymRepository.findManyNearby({
      userLatitude,
      userLongitude,
    });

    return { gyms };
  }
}
