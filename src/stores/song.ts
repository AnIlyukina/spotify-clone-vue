import { defineStore } from 'pinia'
// @ts-ignore
import artist from '../artist.json'
import { ref } from 'vue'


export const useSongStore = defineStore("song", () => {

  const isPlaying = ref(false)
  const currentArtist = ref(null)
  const currentTrack = ref(null)
  const audio = ref(null)


  function playFromFirst () {
    resetState()
    let track = artist.tracks[0]
    loadSong(artist, track);
  }

  function loadSong (artist, track) {
    currentArtist.value = artist
    currentTrack.value = track
    // если трек включен какой-то трек выключить
    if (audio.value && audio.value.src) {
      audio.value.pause()
      isPlaying.value = false
      audio.value.src = ""
    }
    audio.value = new Audio()
    audio.value.src = track.path

    setTimeout(() => {
      isPlaying.value = true
      audio.value.play()
    }, 200)
  }

  function playOrPauseThisSong (artist, track) {
    if (!audio.value || !audio.value.src || currentTrack.value.id !== track.id) {
      loadSong(artist, track)
      return
    }
    playOrPauseSong()
  }

  function playOrPauseSong () {
    if (audio.value.paused) {
      isPlaying.value = true
      audio.value.play()
    } else {
      isPlaying.value = false
      audio.value.pause()
    }
  }

  function resetState () {
    currentArtist.value = null
    currentTrack.value = null
    audio.value = null
    isPlaying.value = false
  }
  function prevSong (currentTrack) {
    if (currentTrack.id !== artist.tracks[0].id) {
      let track = artist.tracks[currentTrack.id - 2]
      loadSong(artist, track)
    }
  }

  function nextSong (currentTrack) {
    if (currentTrack.id === artist.tracks.length) {
      let track = artist.tracks[0];
      loadSong(artist, track);
    } else {
      let track = artist.tracks[currentTrack.id];
      loadSong(artist, track);
    }
  }

  return {
    isPlaying,
    playFromFirst,
    currentTrack,
    currentArtist,
    audio,
    playOrPauseThisSong,
    prevSong,
    nextSong,
    loadSong,
    playOrPauseSong
  }
});
