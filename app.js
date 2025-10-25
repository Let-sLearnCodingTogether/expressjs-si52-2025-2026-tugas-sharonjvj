import express from "express"

const app = express();

app.listen(3000, () => {
    database()
    console.log("Aplikasi berjalan di http://localhost:3000")
})