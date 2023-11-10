const ytdl = require('ytdl-core');

const audioOrVideo = async (id) => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    let result = await ytdl.getInfo(url);
    let formatos = result.formats;

    let audio = formatos.filter((formato) => {

        //solo audio
        return (formato.audioCodec !== null) && (formato.videoCodec === null) && formato.container === 'mp4';
    })
    let video = formatos.filter((formato) => {
        //audio y video
        return formato.codecs.split(',').length >= 2;
    })
    return [audio, video];
}


const information = async (id) => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    let result = await ytdl.getInfo(url);
    return result;
}

module.exports = {
    audioOrVideo, information
}