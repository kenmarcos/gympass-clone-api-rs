import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { GetUserProfileService } from "../get-user-profile";
export const makeGetUserProfile = () => {
  const prismaUsersRepository = new PrismaUsersRepository();
  const service = new GetUserProfileService(prismaUsersRepository);

  return service;
};
