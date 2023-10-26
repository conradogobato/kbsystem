import express from 'express'
import { router } from './server/routes/routes'


const app = express()

app.use(express.json())
app.use(router)

export { app }