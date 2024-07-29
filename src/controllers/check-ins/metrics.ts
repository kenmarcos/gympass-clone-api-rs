import { makeGetUserMetricsService } from "@/services/factories/make-get-user-metrics-service";
import { FastifyReply, FastifyRequest } from "fastify";

export const metrics = async (request: FastifyRequest, reply: FastifyReply) => {
  const getUSerMetricsService = makeGetUserMetricsService();

  const { checkInsCount } = await getUSerMetricsService.execute({
    userId: request.user.sub,
  });

  return reply.status(200).send({ checkInsCount });
};
