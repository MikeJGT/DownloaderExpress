const router = require('express').Router();
const { audioOrVideo, information } = require("../../models/info.model");

router.get('/:id', async (req, res) => {
    try {
        const info = await information(req.params.id);
        res.send(info.videoDetails);

    } catch (err) {
        res.json({ fatal: err.message })
    }
})

router.get('/itag/:id', async (req, res) => {
    try {
        const info = await audioOrVideo(req.params.id);
        res.send(info);
    } catch (err) {
        res.json({ fatal: err.message })
    }
})



module.exports = router;