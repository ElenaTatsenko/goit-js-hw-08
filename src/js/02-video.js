import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const receivedTime = localStorage.getItem(LOCALSTORAGE_KEY);


player.on("timeupdate", throttle(onPlay, 1000));

function onPlay(data) {
  const currentTime = data.seconds;
  localStorage.setItem(LOCALSTORAGE_KEY, currentTime)
}

player
  .setCurrentTime(receivedTime)
  .then(function (seconds) { })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
