import { FastifyRequest, FastifyReply } from "fastify"
import { FindUserService } from "../../services/user/FindUserService"

class FindUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string }

    const findUserService = new FindUserService()
    const user = await findUserService.execute({ id })

    reply.send(user)
  }
}

export { FindUserController }
