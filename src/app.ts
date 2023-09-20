import express from "express"
import cors from "cors"
import prisma from "./prisma"
import { RegisterRoutes } from "./routes"

export const app = express()

const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

RegisterRoutes(app)

app.listen(port, () => {
    console.log("Server running on port ", port)
})