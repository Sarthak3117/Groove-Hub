const music = new Audio('/audio/1.mp3');
// music.play();

const songs = [
    {
        id:1,
        songName:`Bekhayali<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/1.jpg"
    },
    {
        id:2,
        songName:`Kaise Hua<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/2.jpg"
    },
    {
        id:3,
        songName:`Aye Khuda <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/3.jpg"
    },
    {
        id:4,
        songName:`Kabira <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/4.jpg"
    },
    {
        id:5,
        songName:`Phir Bhi Tumko Chahunga <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/5.jpg"
    },
    {
        id:6,
        songName:`Phir Le Aaya Dil <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/6.jpg"
    },
    {
        id:7,
        songName:`Tujhe Kitna Chahne Lage <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/7.jpg"
    },
    {
        id:8,
        songName:`Binte Dil <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/8.jpg"
    },
    {
        id:9,
        songName:`Hawayein <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/9.jpg"
    },
    {
        id:10,
        songName:`Ae Dil Hai Mushkil <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/10.jpg"
    },
    {
        id:11,
        songName:`Kesariya <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/11.jpg"
    },
    {
        id:12,
        songName:`Khamoshiyan <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/12.jpg"
    },
    {
        id:13,
        songName:`Mast Magan <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/arijit/13.jpg"
    }
]



Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
})

//search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element =>{
    const {id, songName, poster} = element;
    // console.log(id);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>
    `;
    search_results.appendChild(card); 
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input_value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
        
    }
})

//search data end

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
       music.play();
       wave.classList.add('active1');
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');
    } else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105, .0)';
    })
}

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('PlaylistPlay')).forEach((el)=>{
        el.classList.remove('bi-pause-circle-fill');
        el.classList.add('bi-play-circle-fill');
    })
}

let index=0;
let posterMasterPlay = document.getElementById('posterMasterPlay');
let downloadMusic = document.getElementById('downloadMusic');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/arijit/${index}.mp3`;
        posterMasterPlay.src = `img/arijit/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        downloadMusic.href = `audio/arijit/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            downloadMusic.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;
    

    let progressBar = parseInt((music_curr/music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`; 
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let volIcon = document.getElementById('volIcon');
let vol = document.getElementById('vol');
let volBar = document.getElementsByClassName('volBar')[0];
let volDot = document.getElementById('volDot');

vol.addEventListener('change',()=>{
    if (vol.value ==0) {
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0 ) {
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.add('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        volIcon.classList.add('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    volBar.style.width = `${vol_a}%`;
    volDot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length

    }
        music.src = `audio/arijit/${index}.mp3`;
        posterMasterPlay.src = `img/arijit/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});

next.addEventListener('click',()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;

    }
        music.src = `audio/arijit/${index}.mp3`;
        posterMasterPlay.src = `img/arijit/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
});



let popSongLeft = document.getElementById('popSongLeft');
let popSongRight = document.getElementById('popSongRight');
let pop_song = document.getElementsByClassName('pop_song')[0];

popSongRight.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})
popSongLeft.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})


let popArtLeft = document.getElementById('popArtLeft');
let popArtRight = document.getElementById('popArtRight');
let item = document.getElementsByClassName('item')[0];

popArtLeft.addEventListener('click',()=>{
    item.scrollLeft -= 330;
})
popArtRight.addEventListener('click',()=>{
    item.scrollLeft += 330;
})

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});


const next_music = () => {
    if (index == songs.length) {
        index = 1        
    } else{
        index ++ ;
    }
        music.src = `audio/${index}.mp3`;
        posterMasterPlay.src = `img/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        downloadMusic.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            downloadMusic.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}


const repeat_music = () => {
    index;
        music.src = `audio/${index}.mp3`;
        posterMasterPlay.src = `img/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        downloadMusic.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            downloadMusic.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}


const random_music = () => {
    if (index == songs.length) {
        index = 1        
    } else{
        index = Math.floor((Math.random() * songs.length)+1);
    }
        music.src = `audio/${index}.mp3`;
        posterMasterPlay.src = `img/${index}.jpg`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        downloadMusic.href = `audio/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            downloadMusic.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
}

music.addEventListener('ended',()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        
        case 'next':
            next_music();
            break;
        
        case 'random':
            random_music();
            break;
        
    }
})