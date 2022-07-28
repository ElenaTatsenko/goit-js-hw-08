import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const receivedTime = localStorage.getItem(LOCALSTORAGE_KEY);


player.on("timeupdate", throttle(onPlay, 1000));

function onPlay(currentTime) {
localStorage.setItem(LOCALSTORAGE_KEY, currentTime)
}
//const errorMessage = "Error"
//receivedTime === 0 ?  errorMessage : player.setCurrentTime(receivedTime)



 //.then(function(sec) {
 //   sec = receivedTime
//}).catch(function(error) {
  // switch (error.name) {
    //    case 'RangeError':
    //        break;

    //   default:
         
 //           break;
  // }
//});
