import { FastifyRequest, FastifyReply } from "fastify"
import { FindUserService } from "../../services/user/FindUserService"
import { z } from "zod"

class FindUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const createUserSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
      })

      const { email, password } = createUserSchema.parse(request.query)

      const { execute: userServiceExecute } = new FindUserService()
      const user = await userServiceExecute({ email })

      if (user.password != password) {
        reply.status(404).send({ message: "User not found" })
      }

      reply.send(user)
    } catch (error) {
      throw new Error("Internal server error")
    }
  }
}

export { FindUserController }
