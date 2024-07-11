import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { appRoutes } from "./controllers/routes";

export const app = fastify();

const prisma = new PrismaClient();

app.register(appRoutes);
