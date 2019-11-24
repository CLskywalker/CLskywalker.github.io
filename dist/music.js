const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    audio: [{
        name: 'name',
        artist: 'artist',
        url: 'http://music.163.com/song/media/outer/url?id=3441491828.mp3',
        cover: 'cover.jpg',
    }]
});