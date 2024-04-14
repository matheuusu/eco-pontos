import prisma from "../../prisma"

interface UpdateUserProps {
  id: string
}

class UpdateUserService {
  async execute({ id }: UpdateUserProps) {}
}
