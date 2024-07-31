import { FastifyInstance } from "fastify";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { create } from "./create";
import { nearby } from "./nearby";
import { search } from "./search";
import { verifyUserRole } from "@/middlewares/verify-user-role";

export const gymsRoutes = async (app: FastifyInstance) => {
  app.addHook("onRequest", verifyJWT);

  app.post("/gyms", { onRequest: [verifyUserRole("ADMIN")] }, create);

  app.get("/gyms/search", search);
  app.get("/gyms/nearby", nearby);
};
