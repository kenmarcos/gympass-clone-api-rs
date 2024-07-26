import { PrismaGymsRepository } from "@/repositories/prisma/prisma-check-ins-repository copy 2";
import { SearchGymsService } from "../search-gyms";

export const makeSearchGymsService = () => {
  const prismaGymsRepository = new PrismaGymsRepository();
  const service = new SearchGymsService(prismaGymsRepository);

  return service;
};
