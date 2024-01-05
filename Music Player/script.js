document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const stopBtn = document.getElementById("stopBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const playlist = document.getElementById("playlist");
  
    function loadSelectedSong() {
      const selectedSong = playlist.value;
      audioSource.src = selectedSong;
      audio.load();
    }
  
    playBtn.addEventListener("click", function() {
      audio.play();
    });
  
    pauseBtn.addEventListener("click", function() {
      audio.pause();
    });
  
    stopBtn.addEventListener("click", function() {
      audio.pause();
      audio.currentTime = 0;
    });
  
    prevBtn.addEventListener("click", function() {
      const selectedIndex = playlist.selectedIndex;
      if (selectedIndex > 0) {
        playlist.selectedIndex = selectedIndex - 1;
        loadSelectedSong();
      }
    });
  
    nextBtn.addEventListener("click", function() {
      const selectedIndex = playlist.selectedIndex;
      if (selectedIndex < playlist.options.length - 1) {
        playlist.selectedIndex = selectedIndex + 1;
        loadSelectedSong();
      }
    });
  
    playlist.addEventListener("change", loadSelectedSong);
  
    loadSelectedSong();
  });
  