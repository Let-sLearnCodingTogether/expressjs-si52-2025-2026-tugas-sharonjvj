import MusicModel from "../models/musicModel.js";

export const tambahLaguFav = async (req,res) => {
    try {
        const request = req.body

        const response = await MusicModel.create({
            songTitle : request.songTitle,
            artist : request.artist,
            album : request.password
        })

        res.status(201).json({
            music : "Berhasil menambahkan lagu ke daftar favorit",
            data : response
        })
    } catch (e) {
        res.status(500).json({
            music : error,
            data : null
        })
    }
}