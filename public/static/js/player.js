const station_url = "https://repaus.com";

var app = new Vue({
  el: '#radio',
  data() {
    return {
      isPlaying: false,
      url: `${station_url}/api/nowplaying/2`,
      interval: null,
      audio: null,
      song: null
    }
  },
  methods: {
    toggleAudio() {
      if (this.isPlaying) {
        this.audio.pause();
        this.isPlaying = false;
      } else {
        this.audio.play();
        this.isPlaying = true;
      }
    }
  },
  mounted() {
    fetch(this.url)
      .then(res => {
        res.json().then((data) => {
          this.song = data.now_playing.song;
        })
      })

    this.interval = setInterval(() => {
      fetch(this.url)
        .then(res => {
            res.json().then((data) => {
              this.song = data.now_playing.song;
            });
        })
    }, 30000);
  }
});

  
const url = `${station_url}/radio/8010/radio.mp3`;
var audio = new Audio(url);

$('.trigger').click(function() {
    if (audio.paused === false) {
        audio.pause();
        audio = new Audio(url);
        $('.fa-play').show();
        $('.fa-stop').hide();
        $('.music-card').removeClass('playing');
    } else {
        audio.play();
        $('.fa-play').hide();
        $('.fa-stop').show();
        $('.music-card').addClass('playing');
    }
});