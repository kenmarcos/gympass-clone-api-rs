import { FastifyInstance } from "fastify";
import { register } from "./users/register";

export const appRoutes = (app: FastifyInstance) => {
  app.post("/users", register);
};
