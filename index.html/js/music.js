class Music{

    constructor(){

        this.audio =
            document.getElementById(
                "backgroundMusic"
            );

        this.button =
            document.getElementById(
                "musicButton"
            );

        this.audio.volume = 0;

        this.playing = false;

        this.button.onclick =
            ()=>this.toggle();

    }

    async toggle(){

        if(!this.playing){

            await this.audio.play();

            this.fadeIn();

            this.button.innerHTML="❚❚";

            this.playing=true;

        }else{

            this.audio.pause();

            this.button.innerHTML="▶";

            this.playing=false;

        }

    }

    fadeIn(){

        let volume=0;

        const fade = setInterval(()=>{

            volume += 0.02;

            this.audio.volume =
                Math.min(volume,0.45);

            if(volume>=0.45){

                clearInterval(fade);

            }

        },120);

    }

    playAutomatically(){

    if(this.playing) return;

    this.audio.play()
    .then(()=>{

        this.fadeIn();

        this.button.innerHTML="❚❚";

        this.playing = true;

    })
    .catch(()=>{

        console.log("Esperando interacción del usuario");

    });

}

}

window.Music = Music;