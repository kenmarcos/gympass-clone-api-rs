import { PrismaGymsRepository } from "@/repositories/prisma/prisma-check-ins-repository copy 2";
import { CreateGymService } from "../create-gym";

export const makeCreateGymService = () => {
  const prismaGymsRepository = new PrismaGymsRepository();
  const service = new CreateGymService(prismaGymsRepository);

  return service;
};
