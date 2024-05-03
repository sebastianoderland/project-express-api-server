import express, { Router } from "express"
import serverless from "serverless-http"
import cors from "cors"
import avocadoSalesData from "./data/avocado-sales.json"
import listEndpoints from "express-list-endpoints"
import serverless from "serverless-http"

const api = express()

const router = Router()
router.get("/hello", (req, res) => res.send("HelloaaaaaaaWorld!"))

api.use("/api/", router)

export const handler = serverless(api)
