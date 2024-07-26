import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { CreateGymService } from "./create-gym";

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymService;

describe("Create Gym Service", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymService(gymsRepository);
  });

  it("should be able to create gym", async () => {
    const { gym } = await sut.execute({
      title: "JavaScript Gym",
      description: null,
      phone: null,
      latitude: -23.625728,
      longitude: -46.61248,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
