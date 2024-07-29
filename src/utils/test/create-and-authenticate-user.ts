import { FastifyInstance } from "fastify";
import request from "supertest";

export const createAndAuthenticateUser = async (app: FastifyInstance) => {
  await request(app.server).post("/api/users").send({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "123456",
  });

  const authResponse = await request(app.server).post("/api/sessions").send({
    email: "johndoe@example.com",
    password: "123456",
  });

  const { token } = authResponse.body;

  return { token };
};
