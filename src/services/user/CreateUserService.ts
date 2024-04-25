import prisma from "../../utils/prisma"

interface CreateUserProps {
  name: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ name, email, password }: CreateUserProps) {
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      })

      return user.id
    } catch (err) {
      throw new Error("Internal Server Error")
    }
  }
}

export { CreateUserService }
