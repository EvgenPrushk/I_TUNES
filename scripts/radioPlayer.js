export const radioPlayerInit = () => {
    const radio = document.querySelector(".radio");
    const radioCoverImg = document.querySelector(".radio-cover__img");
    const radioHeaderBig = document.querySelector(".radio-header__big");
    const radioNavigation = document.querySelector(".radio-navigation");
    const radioItem = document.querySelectorAll(".radio-item");
    const radioStop = document.querySelector(".radio-stop");
    const radioVolume = document.querySelector(".radio-volume");
    const radioMute = document.querySelector(".radio-mute");

    
    
    const audio = new Audio ();
    audio.type = "audio/aac";

    radioStop.disabled = true;

    const changeIconPlay = () => {
        // обратите внимание, что paused  - это свойство, а pause - метод
        if (audio.paused) {
            // добавляет css анимацию вращающейся пластинки на страницу, сделана на css
            radio.classList.remove("play");
            radioStop.classList.add("fa-play");
            radioStop.classList.remove("fa-stop");
        } else {
            radio.classList.add("play");
            radioStop.classList.add("fa-stop");
            radioStop.classList.remove("fa-play"); 
        }
    };

    const selectItem = elem => {
        radioItem.forEach(item => item.classList.remove('select'));
        // добавляем кружок для родитедя
        elem.classList.add('select');
    }

    radioNavigation.addEventListener("change", event => {
        const target = event.target;        
        const parrent = target.closest(".radio-item");
        selectItem(parrent);

        // получение  названиеe
        const title = parrent.querySelector(".radio-name").textContent;
        radioHeaderBig.textContent = title;

        // получение изображения
        const urlImg = parrent.querySelector(".radio-img").src;
        radioCoverImg.src = urlImg;

        // разблокировка кнопки
        radioStop.disabled = false;
       // получаем адресс радиостанции в интернете из вествки
        audio.src = target.dataset.radioStantion;
        audio.play();
        changeIconPlay();
    });

    // radioVolume.addEventListener("input", () =>{
    //     audio.volume = radioVolume.volume / 100;
    //     audio.muted = false;
    // });

    // radioMute.addEventListener("click", () => {
    //     audio.muted = !audio.muted;
    // });

    // radioVolume.value = audio.volume * 100;

    radioStop.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });
}