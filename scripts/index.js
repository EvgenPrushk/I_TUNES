import { radioPlayerInit } from "./radioPlayer.js";
import { musicPlayerInit } from "./musicPlayer.js";
import { videoPlayerInit } from "./videoPlayer.js";

const playerBtn = document.querySelectorAll(".player-btn");
const playerBLock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");

const deactivationPlayer = () => {
  temp.style.display = "none";
  playerBtn.forEach((item) => {
    item.classList.remove("active");
  });
  playerBLock.forEach((item) => {
    item.classList.remove("active");
  });
};

playerBtn.forEach((btn, i) => {  
  btn.addEventListener("click", () => {
    deactivationPlayer();

    btn.classList.add("active");
    playerBLock[i].classList.add("active");
  });
});

// console.log(playerBtn);
// console.log(playerBLock);
radioPlayerInit();
musicPlayerInit();
videoPlayerInit();
