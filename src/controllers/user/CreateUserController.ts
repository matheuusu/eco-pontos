import { FastifyRequest, FastifyReply } from "fastify"
import { CreateUserService } from "../../services/user/CreateUserService"
import { z } from "zod"

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const createUserSchema = z.object({
      name: z.string().min(3),
      email: z.string(),
      password: z.string(),
    })

    const { name, email, password } = createUserSchema.parse(request.body)
    const createUserService = new CreateUserService()
    const user = await createUserService.execute({ name, email, password })

    reply.status(201).send(user)
  }
}

export { CreateUserController }
