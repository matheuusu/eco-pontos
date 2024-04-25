import prisma from "../../utils/prisma"

interface UpdateUserProps {
  id: string
}

class UpdateUserService {
  async execute({ id }: UpdateUserProps) {}
}
