import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository copy";
import { CheckInService } from "../check-in";
import { PrismaGymsRepository } from "@/repositories/prisma/prisma-check-ins-repository copy 2";

export const makeCheckInService = () => {
  const prismaCheckInRepository = new PrismaCheckInsRepository();
  const prismaGymsRepository = new PrismaGymsRepository();
  const service = new CheckInService(
    prismaCheckInRepository,
    prismaGymsRepository
  );

  return service;
};
