import prisma from "../../prisma"

class ListUsersService {
  async execute() {
    const users = await prisma.users.findMany()

    return users
  }
}

export { ListUsersService }
