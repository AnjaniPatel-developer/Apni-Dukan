const express = require("express")
const cors = require("cors")
const path = require("path")

require("dotenv").config()
require("./db-connect")

const Router = require("./routes")

const app = express()

// ✅ CORS
const cors = require("cors")

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://apni-dukan-76jh.onrender.com'  
    ],
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

// ✅ STATIC FILES - YEH ADD KAREIN:
app.use("/public", express.static("./public"))
app.use("/images", express.static("./public/uploads"))

app.use("/api", Router)

let port = process.env.PORT || 8000

const server = app.listen(port, '0.0.0.0', () => {
    console.log(`✅ Server is Running at http://localhost:${port}`)
})

console.log(`🔄 Server process is running on PID: ${process.pid}`);