import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { profile } from "./profile";
import { verifyJWT } from "@/middlewares/verify-jwt";

export const appRoutes = async (app: FastifyInstance) => {
  app.post("/users", register);

  app.get("/me", { onRequest: [verifyJWT] }, profile);

  app.post("/sessions", authenticate);
};
