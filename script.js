const music = new Audio('audio/1.mp3');
music.play();

const songs = [
    {
        id: 1,
        songName: `These Days <br> 
        <div class="subtitle">Sidhu Moosewala</div>`,
        poster: "img/1.jpg  "
    },
    {
        id: 2,
        songName: `Chaand Sifarish <br> 
        <div class="subtitle">Kailash Kher X Shaan</div>`,
        poster: "img/2.jpg  "
    },
    {
        id: 3,
        songName: `Love Nwantiti <br> 
        <div class="subtitle">CKay</div>`,
        poster: "img/3.jpg  "
    },
    {
        id: 4,
        songName: `Ek Tarfa <br> 
        <div class="subtitle">King</div>`,
        poster: "img/4.jpg  "
    },
    {
        id: 5,
        songName: `Baarishein <br> 
        <div class="subtitle">Anuv Jain</div>`,
        poster: "img/5.jpg  "
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementByTagName('img')[0].src = songs[i].poster;
})

let popSongLeft = document.getElementById('popSongLeft')
let popSongRight = document.getElementById('popSongRight')
let pop_song = document.getElementsByClassName('pop_song')[0];

popSongRight.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});
popSongLeft.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let popArtLeft = document.getElementById('popArtLeft')
let popArtRight = document.getElementById('popArtRight')
let item = document.getElementsByClassName('item')[0];

popArtLeft.addEventListener('click',()=>{
    item.scrollLeft += 330;
});
popArtRight.addEventListener('click',()=>{
    item.scrollLeft -= 330;
});