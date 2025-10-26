import express from "express"
import * as favSongController from "../controllers/favSongController.js"

const api = express.Router()

api.post("/addFavSong", favSongController.tambahLaguFav)

export default api;