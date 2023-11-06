const ytdl = require('ytdl-core');
const fs = require('fs');
const { resolve } = require('path');

const getVideo = (id, res) => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    let data = ytdl(url, { quality: '22', filter: format => format.container === 'mp4' }).on('data', (chunk) => {
        res.write(chunk);
    })
}

module.exports = {
    getVideo
}
