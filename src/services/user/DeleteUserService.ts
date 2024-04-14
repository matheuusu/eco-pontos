import prisma from "../../prisma"

interface DeleteUserProps {
  id: string
}

class DeleteUserService {
  async execute({ id }: DeleteUserProps) {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    })

    await prisma.users.delete({
      where: {
        id: user?.id,
      },
    })

    return { message: "usuario deletado" }
  }
}

export { DeleteUserService }
