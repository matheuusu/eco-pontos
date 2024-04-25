import { FastifyRequest, FastifyReply } from "fastify"
import { CreateUserService } from "../../services/user/CreateUserService"
import { z } from "zod"

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    try {
      const createUserSchema = z.object({
        name: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(8),
      })

      const { execute: createUserServiceExecute } = new CreateUserService()

      const { name, email, password } = createUserSchema.parse(request.body)

      const user = createUserServiceExecute({ name, email, password })

      reply.status(201).send(user)
    } catch (error) {
      if (error instanceof z.ZodError) {
        reply.status(400).send(error.errors)
      } else {
        reply.status(500).send("Internal Server Error")
      }
    }
  }
}

export { CreateUserController }
