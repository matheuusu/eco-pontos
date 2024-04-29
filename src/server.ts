import fastify from "fastify"
import { routes } from "./routes"
import cors from "@fastify/cors"

const app = fastify({ logger: true })

const start = async () => {
  await app.register(cors)
  await app.register(routes)

  try {
    await app
      .listen({
        host: "0.0.0.0",
        port: process.env.PORT ? Number(process.env.PORT) : 3333,
      })
      .then(() => {
        console.log("server is running")
      })
  } catch (err) {
    process.exit(1)
  }
}

start()
