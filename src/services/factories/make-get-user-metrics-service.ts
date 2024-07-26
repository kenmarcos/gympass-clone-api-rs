import { GetUserMetricsService } from "../get-user-metrics";
import { PrismaCheckInsRepository } from "@/repositories/prisma/prisma-check-ins-repository copy";

export const makeGetUserMetrics = () => {
  const prismaCheckInsRepository = new PrismaCheckInsRepository();
  const service = new GetUserMetricsService(prismaCheckInsRepository);

  return service;
};
