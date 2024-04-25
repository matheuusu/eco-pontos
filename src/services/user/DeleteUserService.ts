import prisma from "../../utils/prisma"

interface DeleteUserProps {
  id: string
}

class DeleteUserService {
  async execute({ id }: DeleteUserProps) {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      })

      if (!user) {
        throw new Error("User was not found")
      }

      await prisma.user.delete({
        where: {
          id: user.id,
        },
      })

      return { message: "User has deleted" }
    } catch (err) {
      throw new Error("Internal Server Error")
    }
  }
}

export { DeleteUserService }
