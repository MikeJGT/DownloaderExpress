const router = require('express').Router();
const cors = require('cors');
const ytdl = require('ytdl-core');

router.get('/:id/:itag', cors(), async (req, res) => {
    try {
        const url = `https://www.youtube.com/watch?v=${req.params.id}`;
        let chunkSize = 0;
        const yt = ytdl(url, {
            requestOptions: {
                'Content-Type': 'video/mp4',
                'Transfer-Encoding': 'chunked',
                'X-Content-Type-Options': 'nosniff'
            }
            , quality: `${req.params.itag}`, filter: format => format.container === 'mp4'
        }).on('data', (chunk) => {
            chunkSize += chunk.length;
            res.write(chunk);
        }).on('end', () => {
            res.end();
        })

    } catch (err) {
        res.json({ fatal: err.message })
    }
})

module.exports = router;
