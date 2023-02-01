import fastify from "fastify";
import cors from "@fastify/cors";
// import { userRoutes } from "./routes/users/userRoutes";
import { appRoutes } from "./routes/routes";

const server = fastify()

server.register(cors)
server.register(appRoutes)

const PORT = 3333
const HOST = "127.0.0.1"

try {
  server.listen({
    port: PORT,
    host: HOST,
  }).then(() => {
    console.log(`Server is running in http://${HOST}:${PORT}`)
  })
} catch (error) {
  server.log.error(error)
  process.exit(1)
} 