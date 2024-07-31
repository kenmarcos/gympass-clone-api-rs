import { FastifyReply, FastifyRequest } from "fastify";

export const refresh = async (request: FastifyRequest, reply: FastifyReply) => {
  // Verificar se existe refreshToken e se ele ainda é valido (não expirou)
  await request.jwtVerify({ onlyCookie: true });

  const { role } = request.user;

  // Criar novo token JWT
  const token = await reply.jwtSign(
    { role },
    {
      sign: {
        sub: request.user.sub,
      },
    }
  );

  // Criar novo refresh token JWT
  const refresToken = await reply.jwtSign(
    { role },
    {
      sign: {
        sub: request.user.sub,
        expiresIn: "7d",
      },
    }
  );

  return reply
    .status(200)
    .setCookie("refreshToken", refresToken, {
      path: "/",
      secure: true,
      sameSite: true,
      httpOnly: true,
    })
    .send({
      token,
    });
};
