class Message {

    constructor(){

        this.box =
            document.getElementById("message");

        this.messages=[

            "Para la niña más hermosa... 💙",

            "Cada tulipán florece pensando en ti.",

            "Incluso las estrellas parecen más brillantes cuando sonríes.",

            "mis sueños se vuelven idílicos cuando apareces tú.",

            "Probablemente ya no sientas nada hacia mí.",

            "Pero eso no cambia lo que siento yo hacia a ti... Cara Mía..💙💙💙💙💙💙💙",

            "Gracias por existir.",

            "Aun te amo. 💙"

        ];

        this.index = 0;

        this.musicStarted = false;

        setTimeout(()=>{

            this.next();

        },2000);

    }

    next(){

        if(this.index >= this.messages.length){

            this.index = 0;

        }

        const flash =
        document.getElementById("messageFlash");

        flash.style.opacity = 1;

        setTimeout(()=>{

            flash.style.opacity = 0;

        },700);
        
        if(this.messages[this.index] === "Aun te amo. 💙"){

    window.dispatchEvent(
        new Event("finalMoment")
    );

}
        this.type(

            this.messages[this.index],

            ()=>{

                setTimeout(()=>{

                    this.fadeOut();

                },4000);

            }

        );

    }

    type(text,finish){

        this.box.innerHTML="";

        this.box.style.opacity=1;

        let i=0;

        const interval=setInterval(()=>{

            this.box.innerHTML+=text[i];

            i++;

            if(i>=text.length){

                clearInterval(interval);

                finish();

            }

        },55);

    }

    fadeOut(){

        this.box.style.opacity=0;

        setTimeout(()=>{

            this.index++;

            this.next();

        },1500);

    }

}

window.Message = Message;
