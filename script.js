let selectedMood = "mutlu";
let selectedType = "all";
let selectedTempo = "all";

const songs = [
    {mood:"mutlu", title:"Mr. Blue Sky", artist:"Electric Light Orchestra", type:"pop", tempo:"hizli", icon:"🌤️"},
    {mood:"mutlu", title:"Good as Hell", artist:"Lizzo", type:"pop", tempo:"orta", icon:"💪"},
    {mood:"mutlu", title:"Here Comes The Sun", artist:"The Beatles", type:"rock", tempo:"orta", icon:"🌅"},
    {mood:"mutlu", title:"Watermelon Sugar", artist:"Harry Styles", type:"pop", tempo:"orta", icon:"🍉"},
    {mood:"mutlu", title:"Happy", artist:"Pharrell Williams", type:"pop", tempo:"hizli", icon:"😄"},
    {mood:"mutlu", title:"Levitating", artist:"Dua Lipa", type:"pop", tempo:"hizli", icon:"✨"},
    {mood:"mutlu", title:"Şımarık", artist:"Tarkan", type:"turkce", tempo:"hizli", icon:"💃"},
    {mood:"mutlu", title:"Can't Stop The Feeling", artist:"Justin Timberlake", type:"pop", tempo:"hizli", icon:"🎉"},

    {mood:"huzunlu", title:"Someone Like You", artist:"Adele", type:"pop", tempo:"yavas", icon:"🌧️"},
    {mood:"huzunlu", title:"Before You Go", artist:"Lewis Capaldi", type:"pop", tempo:"yavas", icon:"🥺"},
    {mood:"huzunlu", title:"Gidemem", artist:"Sezen Aksu", type:"turkce", tempo:"yavas", icon:"💧"},
    {mood:"huzunlu", title:"Let Her Go", artist:"Passenger", type:"pop", tempo:"yavas", icon:"🍂"},
    {mood:"huzunlu", title:"Fix You", artist:"Coldplay", type:"rock", tempo:"yavas", icon:"🕯️"},
    {mood:"huzunlu", title:"Lovely", artist:"Billie Eilish", type:"pop", tempo:"yavas", icon:"🖤"},

    {mood:"enerjik", title:"Titanium", artist:"David Guetta", type:"electronic", tempo:"hizli", icon:"⚡"},
    {mood:"enerjik", title:"Lose Yourself", artist:"Eminem", type:"hiphop", tempo:"hizli", icon:"🔥"},
    {mood:"enerjik", title:"Stronger", artist:"Kanye West", type:"hiphop", tempo:"hizli", icon:"💥"},
    {mood:"enerjik", title:"Blinding Lights", artist:"The Weeknd", type:"electronic", tempo:"hizli", icon:"🌃"},
    {mood:"enerjik", title:"Düm Tek Tek", artist:"Hadise", type:"turkce", tempo:"hizli", icon:"💃"},
    {mood:"enerjik", title:"Believer", artist:"Imagine Dragons", type:"rock", tempo:"hizli", icon:"🐉"},

    {mood:"romantik", title:"Perfect", artist:"Ed Sheeran", type:"pop", tempo:"yavas", icon:"🌹"},
    {mood:"romantik", title:"Lover", artist:"Taylor Swift", type:"pop", tempo:"yavas", icon:"💕"},
    {mood:"romantik", title:"Her Şey Sensin", artist:"Yalın", type:"turkce", tempo:"yavas", icon:"💌"},
    {mood:"romantik", title:"Say You Won't Let Go", artist:"James Arthur", type:"pop", tempo:"yavas", icon:"❤️"},
    {mood:"romantik", title:"All of Me", artist:"John Legend", type:"pop", tempo:"yavas", icon:"🎹"},
    {mood:"romantik", title:"Martılar", artist:"Edis", type:"turkce", tempo:"orta", icon:"🌊"},

    {mood:"sakin", title:"Yellow", artist:"Coldplay", type:"rock", tempo:"yavas", icon:"🌙"},
    {mood:"sakin", title:"Nuvole Bianche", artist:"Ludovico Einaudi", type:"klasik", tempo:"yavas", icon:"🎹"},
    {mood:"sakin", title:"Don't Know Why", artist:"Norah Jones", type:"jazz", tempo:"yavas", icon:"☕"},
    {mood:"sakin", title:"Beni Sen İnandır", artist:"Pinhani", type:"turkce", tempo:"yavas", icon:"🌿"},
    {mood:"sakin", title:"Weightless", artist:"Marconi Union", type:"electronic", tempo:"yavas", icon:"🫧"},
    {mood:"sakin", title:"Clair de Lune", artist:"Debussy", type:"klasik", tempo:"yavas", icon:"🌌"},

    {mood:"odakli", title:"Time", artist:"Hans Zimmer", type:"klasik", tempo:"orta", icon:"⏳"},
    {mood:"odakli", title:"Study Session", artist:"LoFi Beats", type:"jazz", tempo:"orta", icon:"📚"},
    {mood:"odakli", title:"Deep Focus", artist:"Coding Music", type:"electronic", tempo:"orta", icon:"💻"},
    {mood:"odakli", title:"Experience", artist:"Ludovico Einaudi", type:"klasik", tempo:"orta", icon:"🎯"},
    {mood:"odakli", title:"Midnight City", artist:"M83", type:"electronic", tempo:"orta", icon:"🌆"},
    {mood:"odakli", title:"Nocturne", artist:"Chopin", type:"klasik", tempo:"yavas", icon:"🕰️"},

    {mood:"nostalji", title:"Gülpembe", artist:"Barış Manço", type:"turkce", tempo:"yavas", icon:"📻"},
    {mood:"nostalji", title:"Dancing Queen", artist:"ABBA", type:"pop", tempo:"hizli", icon:"🪩"},
    {mood:"nostalji", title:"Cheri Cheri Lady", artist:"Modern Talking", type:"pop", tempo:"orta", icon:"💿"},
    {mood:"nostalji", title:"Hotel California", artist:"Eagles", type:"rock", tempo:"orta", icon:"🏜️"},
    {mood:"nostalji", title:"Yakar Geçerim", artist:"Ajda Pekkan", type:"turkce", tempo:"orta", icon:"✨"},
    {mood:"nostalji", title:"Billie Jean", artist:"Michael Jackson", type:"pop", tempo:"hizli", icon:"🕺"},

    {mood:"guclu", title:"Eye of the Tiger", artist:"Survivor", type:"rock", tempo:"hizli", icon:"🐯"},
    {mood:"guclu", title:"Power", artist:"Kanye West", type:"hiphop", tempo:"hizli", icon:"👑"},
    {mood:"guclu", title:"Run This Town", artist:"Jay-Z", type:"hiphop", tempo:"hizli", icon:"🏙️"},
    {mood:"guclu", title:"Unstoppable", artist:"Sia", type:"pop", tempo:"orta", icon:"🚀"},
    {mood:"guclu", title:"Thunder", artist:"Imagine Dragons", type:"rock", tempo:"hizli", icon:"⚡"},
    {mood:"guclu", title:"Till I Collapse", artist:"Eminem", type:"hiphop", tempo:"hizli", icon:"🔥"}
];

function shuffleArray(arr){
    return [...arr].sort(() => Math.random() - 0.5);
}

function getFilteredSongs(){
    let list = songs.filter(song => song.mood === selectedMood);

    if(selectedType !== "all"){
        list = list.filter(song => song.type === selectedType);
    }

    if(selectedTempo !== "all"){
        list = list.filter(song => song.tempo === selectedTempo);
    }

    return shuffleArray(list).slice(0,8);
}

function showSongs(){
    const list = getFilteredSongs();

    $("#songList").html("");

    $("#resultInfo").text(`${getMoodEmoji(selectedMood)} ${getMoodName(selectedMood)} için ${list.length} şarkı`);

    if(list.length === 0){
        $("#songList").html(`
            <div class="col-12">
                <div class="empty-box">
                    Bu filtrelere uygun şarkı bulunamadı. Farklı tür veya tempo seç.
                </div>
            </div>
        `);
        return;
    }

    list.forEach(song => {
        $("#songList").append(`
            <div class="col-md-6">
                <div class="song-card">
                    <div class="song-icon">${song.icon}</div>

                    <div class="song-info">
                        <h5>${song.title}</h5>
                        <p>${song.artist}</p>
                        <span class="tag">${song.type.toUpperCase()}</span>
                        <span class="tag">${song.tempo.toUpperCase()}</span>
                    </div>

                    <a class="play-btn"
                    href="https://www.youtube.com/results?search_query=${song.artist} ${song.title}"
                    target="_blank">▶️</a>

                    <button class="fav-btn"
                    data-title="${song.title}"
                    data-artist="${song.artist}"
                    data-icon="${song.icon}"
                    data-type="${song.type}"
                    data-tempo="${song.tempo}">♥️</button>
                </div>
            </div>
        `);
    });
}

function getMoodName(mood){
    const names = {
        mutlu:"Mutlu",
        huzunlu:"Hüzünlü",
        enerjik:"Enerjik",
        romantik:"Romantik",
        sakin:"Sakin",
        odakli:"Odaklı",
        nostalji:"Nostalji",
        guclu:"Güçlü"
    };

    return names[mood];
}

function getMoodEmoji(mood){
    const emojis = {
        mutlu:"😄",
        huzunlu:"🥺",
        enerjik:"⚡",
        romantik:"💕",
        sakin:"🌿",
        odakli:"🎯",
        nostalji:"🌙",
        guclu:"🔥"
    };

    return emojis[mood];
}

$(".mood-card").click(function(){
    $(".mood-card").removeClass("active");
    $(this).addClass("active");

    selectedMood = $(this).data("mood");

    showSongs();
});

$(".filter-btn").click(function(){
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    selectedType = $(this).data("type");

    showSongs();
});

$(".tempo-btn").click(function(){
    $(".tempo-btn").removeClass("active");
    $(this).addClass("active");

    selectedTempo = $(this).data("tempo");

    showSongs();
});

$("#suggestBtn").click(function(){
    showSongs();

    $("html, body").animate({
        scrollTop:$(".results").offset().top - 30
    }, 600);
});

$("#shuffleBtn").click(function(){
    showSongs();
});

$(document).on("click",".fav-btn",function(){
    const title = $(this).data("title");
    const artist = $(this).data("artist");
    const icon = $(this).data("icon");
    const type = $(this).data("type");
    const tempo = $(this).data("tempo");

    $("#favoriteList").append(`
        <div class="col-md-6">
            <div class="song-card">
                <div class="song-icon">${icon}</div>

                <div class="song-info">
                    <h5>${title}</h5>
                    <p>${artist}</p>
                    <span class="tag">${type.toUpperCase()}</span>
                    <span class="tag">${tempo.toUpperCase()}</span>
                </div>
            </div>
        </div>
    `);
});

showSongs();