class Intro{

    constructor(){

        this.overlay =
            document.getElementById("intro");

        this.button =
            document.getElementById("startButton");

        this.button.addEventListener(
            "click",
            ()=>this.start()
        );

    }

    start(){

        this.overlay.classList.add("hide");

        if(window.music){

            window.music.playAutomatically();

        }

        setTimeout(()=>{

            this.overlay.remove();

            window.dispatchEvent(
                new Event("gardenStart")
            );

        },1800);

    }

}

window.Intro = Intro;