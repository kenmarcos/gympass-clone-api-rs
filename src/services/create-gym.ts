import { Gym } from "@prisma/client";
import { GymsRepository } from "@/repositories/gyms-repository";

interface CrateGymServiceRequest {
  title: string;
  description: string | null;
  phone: string | null;
  latitude: number;
  longitude: number;
}

interface CrateGymServiceResponse {
  gym: Gym;
}

export class CrateGymService {
  constructor(private gymRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: CrateGymServiceRequest): Promise<CrateGymServiceResponse> {
    const gym = await this.gymRepository.create({
      title,
      description,
      phone,
      latitude,
      longitude,
    });

    return { gym };
  }
}
