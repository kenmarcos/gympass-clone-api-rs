import { FastifyInstance } from "fastify";
import { register } from "./users/register";
import { authenticate } from "./users/authenticate";
import { profile } from "./users/profile";

export const appRoutes = async (app: FastifyInstance) => {
  app.post("/users", register);

  app.get("/me", profile);

  app.post("/sessions", authenticate);
};
