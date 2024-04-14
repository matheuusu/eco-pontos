import fastify, {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify"

import { CreateUserController } from "./controllers/user/CreateUserController"
import { ListUsersController } from "./controllers/user/ListUsersController"
import { FindUserController } from "./controllers/user/FindUserController"
import { DeleteUserController } from "./controllers/user/DeleteUserController"

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get(
    "/users",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListUsersController().handle(request, reply)
    }
  )

  fastify.get("/user", async (request: FastifyRequest, reply: FastifyReply) => {
    return new FindUserController().handle(request, reply)
  })

  fastify.delete(
    "/deleteUser",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteUserController().handle(request, reply)
    }
  )

  fastify.post(
    "/createUser",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateUserController().handle(request, reply)
    }
  )
}
