import { prisma } from '../../lib/prisma'
import { z } from 'zod'


export default {

  async create(request: any, response: any) {
    const createUser = z.object({
      name: z.string(),
      email: z.string(),
    })

    const { name, email } = createUser.parse(request.body)

    try {
      await prisma.user.create({
        data: {
          name,
          email
        }
      })
    } catch (error) {
      response.log.error(error)
      process.exit(1)
    }
  },

  async list(_request: any, response: any) {
    try {
      const users = await prisma.user.findMany()
      return users
    } catch (error) {
      response.log.error(error)
      process.exit(1)
    }

  },

  async update(request: any, response: any) {
    const userParams = z.object({
      id: z.string().uuid(),
    })

    const updateUser = z.object({
      name: z.string(),
      email: z.string(),
    })

    const { id } = userParams.parse(request.params)

    const { name, email } = updateUser.parse(request.body)

    try {
      await prisma.user.update({
        where: {
          id: id
        },
        data: {
          name: name,
          email: email,
        }
      })
    } catch (error) {
      response.log.error(error)
      process.exit(1)
    }
  },

  async delete(request: any, response: any) {
    const userParams = z.object({
      id: z.string().uuid(),
    })
    const { id } = userParams.parse(request.params)

    try {
      await prisma.user.delete({
        where: {
          id: id
        }
      })
    } catch (error) {
      response.log.error(error)
      process.exit(1)
    }
  }

}

