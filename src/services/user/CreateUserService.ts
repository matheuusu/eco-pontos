import prisma from "../../prisma"

interface CreateUserProps {
  name: string
  email: string
  password: string
}

class CreateUserService {
  async execute({ name, email, password }: CreateUserProps) {
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    })

    return user
  }
}

export { CreateUserService }
