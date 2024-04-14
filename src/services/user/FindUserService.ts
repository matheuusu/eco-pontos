import prisma from "../../prisma"

interface FindUserPros {
  id: string
}

class FindUserService {
  async execute({ id }: FindUserPros) {
    const findUser = await prisma.users.findUnique({
      where: {
        id: id,
      },
    })

    return findUser
  }
}

export { FindUserService }
