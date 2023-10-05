const ytdl = require('ytdl-core');
const fs = require('fs');
const { resolve } = require('path');

const getVideo = (id, res) => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    // data;
    // return new Promise((resolve, reject) => {
    let data = ytdl(url, { quality: '22', filter: format => format.container === 'mp4' }).on('data', (chunk) => {
        //console.log('chunk', chunk)
        res.write(chunk);
    })
    // .on('end', async () => {
    //     //console.log('data', data);
    //     resolve(data.read());
    // })
}



module.exports = {
    getVideo
}