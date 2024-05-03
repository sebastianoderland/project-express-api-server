import express from "express"
import serverless from "serverless-http"
// import cors from "cors"
import listEndpoints from "express-list-endpoints"
import avocadoSalesData from "./data/avocado-sales.json"

const api = express()

api.get("/hello", (req, res) => res.send("HelloaaaaaaaWorld!"))

export const handler = serverless(api)
