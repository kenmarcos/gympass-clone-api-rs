import { PrismaGymsRepository } from "@/repositories/prisma/prisma-check-ins-repository copy 2";
import { FetchNearbyGymsService } from "../fetch-nearby-gyms";

export const makeFetchNearbyGymsService = () => {
  const prismaGymsRepository = new PrismaGymsRepository();
  const service = new FetchNearbyGymsService(prismaGymsRepository);

  return service;
};
