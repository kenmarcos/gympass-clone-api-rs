import { makeGetUserProfile } from "@/services/factories/make-get-user-profile-service";
import { FastifyReply, FastifyRequest } from "fastify";

export const profile = async (request: FastifyRequest, reply: FastifyReply) => {
  await request.jwtVerify();

  const getUserProfileService = makeGetUserProfile();

  const { user } = await getUserProfileService.execute({
    userId: request.user.sub,
  });

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined,
    },
  });
};
