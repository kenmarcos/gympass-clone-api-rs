import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository copy";
import { FetchUserCheckInsHistoryService } from "../fetch-user-check-ins-history";

export const makeFetchUserCheckInsHistoryService = () => {
  const prismaCheckInRepository = new PrismaCheckInsRepository();
  const service = new FetchUserCheckInsHistoryService(prismaCheckInRepository);

  return service;
};
