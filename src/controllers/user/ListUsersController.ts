import { FastifyRequest, FastifyReply } from "fastify"
import { ListUsersService } from "../../services/user/ListUsersService"

class ListUsersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listUsersService = new ListUsersService()
    const users = await listUsersService.execute()

    reply.status(200).send(users)
  }
}

export { ListUsersController }
