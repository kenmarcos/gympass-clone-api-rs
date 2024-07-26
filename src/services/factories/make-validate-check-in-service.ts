import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository copy";
import { ValidateCheckInService } from "../validate-check-in";

export const makeValidateCheckInService = () => {
  const prismaCheckInRepository = new PrismaCheckInsRepository();
  const service = new ValidateCheckInService(prismaCheckInRepository);

  return service;
};
