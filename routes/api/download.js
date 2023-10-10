const { getVideo } = require('../../models/download.model');
const fs = require('fs');
const router = require('express').Router();
const ytdl = require('ytdl-core');

router.get('/:id/:itag', async (req, res) => {
    try {
        const url = `https://www.youtube.com/watch?v=${req.params.id}`;
        // res.writeHead(200, {
        //     'Content-Type': 'text/plain; charset=utf-8',
        //     'Transfer-Encoding': 'chunked',
        //     'X-Content-Type-Options': 'nosniff',
        //     'Access-Control-Allow-Origin': '*'
        // })
        ytdl(url, {
            requestOptions: {
                'Transfer-Encoding': 'chunked',
                'Access-Control-Allow-Origin': '*'
            }
        }, { quality: `${req.params.itag}`, filter: format => format.container === 'mp4' }).on('data', (chunk) => {
            res.write(chunk);

            //console.log('chunk', chunk)
        }).on('end', () => {

            res.end();
        })
        console.log('YT', yt);

    } catch (err) {
        res.json({ fatal: err.message })
    }
})

module.exports = router;