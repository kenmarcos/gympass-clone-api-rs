import { FastifyInstance } from "fastify";
import { register } from "./users/register";
import { authenticate } from "./users/authenticate";
import { profile } from "./users/profile";
import { verifyJWT } from "@/middlewares/verify-jwt";

export const appRoutes = async (app: FastifyInstance) => {
  app.post("/users", register);

  app.get("/me", { onRequest: [verifyJWT] }, profile);

  app.post("/sessions", authenticate);
};
