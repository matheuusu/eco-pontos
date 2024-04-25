import prisma from "../../utils/prisma"

interface FindUserPros {
  id: string
}

class FindUserService {
  async execute({ id }: FindUserPros) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      })

      if (!user) {
        throw new Error("User was not found")
      }

      return user
    } catch (err) {
      throw new Error("Internal Server Error")
    }
  }
}

export { FindUserService }
