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
      },
      {
        name: "富士山下",
        artist: '陈奕迅',
        url: 'http://music.163.com/song/media/outer/url?id=65766.mp3',
        cover: 'http://p2.music.126.net/PcJq6i7zMcPgudejdn1yeg==/109951163256302356.jpg?param=130y130',
      }，
      {
        name: "Traveling light",
        artist: 'Joel Hanson',
        url: 'http://music.163.com/song/media/outer/url?id=1491585.mp3',
        cover: 'http://p2.music.126.net/zYqptzyHld2ylpb5FOoqDA==/1785606883508227.jpg?param=130y130',
      }
    ]
});