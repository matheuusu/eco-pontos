import prisma from "../../utils/prisma"

interface FindUserPros {
  email: string
}

class FindUserService {
  async execute({ email }: FindUserPros) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) {
        throw new Error("User was not found")
      }

      return user
    } catch (error) {
      throw new Error("Internal Server Error")
    }
  }
}

export { FindUserService }
