const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "水星记",
        artist: '郭顶',
        url: 'http://music.163.com/song/media/outer/url?id=441491828.mp3',
        cover: 'http://p1.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg?param=130y130',
      }
    ]
});