import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const firstUserId = '0730ffac-d039-4194-9571-01aa2aa0efbd'
const secondUserId = '00880d75-a933-4fef-94ab-e05744435297'
const thirdUserId = 'fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00'

async function main() {
  await prisma.user.deleteMany()

  await Promise.all([
    prisma.user.create({
      data: {
        id: firstUserId,
        name: "Kelvin Bass",
        email: "kelvin@teste.com",
      }
    }),

    prisma.user.create({
      data: {
        id: secondUserId,
        name: "João vitor",
        email: "joao@teste.com",
      }
    }),
    prisma.user.create({
      data: {
        id: thirdUserId,
        name: "Felipe Brito",
        email: "felipe@teste.com",
      }
    }),
  ])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })