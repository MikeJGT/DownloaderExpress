const ytdl = require('ytdl-core');
const router = require('express').Router();

// const audioOrVideo = (tipo, id) => {
//     const url = `https://www.youtube.com/watch?v=${id}`;
//     ytdl.getInfo(url).then((result) => {
//         let formatos = result.formats;

//         let audioVideo = formatos.filter((formato) => {
//             if (tipo === 'audio') {
//                 //solo audio
//                 return (formato.audioCodec !== null) && (formato.videoCodec === null) && formato.container === 'mp4';
//             }

//             //audio y video
//             return formato.codecs.split(',').length >= 2;
//         })
//         // console.log('Formatos', formatos)
//         // for (let formato of formatos) {
//         //     console.log('Quality:', formato.qualityLabel, ' Container:', formato.container, ',Codecs:', formato.codecs, 'Itag: ', formato.itag);
//         // }

//         //console.log('Resul', audioVideo);
//         for (let tag of audioVideo) {
//             // console.log(`Calidad: ${tag.qualityLabel},Codecs: ${tag.codecs},ITAG: ${tag.itag}`)
//         }
//         return 'AudioVideo2'
//         return audioVideo;
//     })
// }


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
    // console.log('Formatos', formatos)
    // for (let formato of formatos) {
    //     console.log('Quality:', formato.qualityLabel, ' Container:', formato.container, ',Codecs:', formato.codecs, 'Itag: ', formato.itag);
    // }

    //console.log('Resul', audioVideo);
    //for (let tag of audioVideo) {
    // console.log(`Calidad: ${tag.qualityLabel},Codecs: ${tag.codecs},ITAG: ${tag.itag}`)
    //}
    return [audio, video];
    return 'AudioVideo2'
}


const information = async (id) => {
    const url = `https://www.youtube.com/watch?v=${id}`;
    let result = await ytdl.getInfo(url);
    return result;
}

module.exports = {
    audioOrVideo, information
}