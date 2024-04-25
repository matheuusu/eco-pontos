import prisma from "../../utils/prisma"

class ListUsersService {
  async execute() {
    try {
      const users = await prisma.user.findMany()

      return users
    } catch (err) {
      throw new Error("Internal Server Error")
    }
  }
}

export { ListUsersService }
