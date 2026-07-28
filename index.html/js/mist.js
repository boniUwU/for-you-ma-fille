class Mist{

    constructor(container){

        this.container = container;

        this.start();

    }

    start(){

        this.spawn();

        setTimeout(()=>{

            this.start();

        },7000 + Math.random()*6000);

    }

    spawn(){

        const cloud =
            document.createElement("div");

        cloud.classList.add("mist-cloud");

        cloud.style.left = "-500px";

        cloud.style.bottom =
    (120 + Math.random()*120) + "px";

        cloud.style.opacity =
            0.12 + Math.random()*0.12;

        cloud.style.animationDuration =
            (35 + Math.random()*25) + "s";

        cloud.style.width =
    (350 + Math.random()*350) + "px";

cloud.style.height =
    (120 + Math.random()*120) + "px";

        document.body.appendChild(cloud);

    
        cloud.addEventListener("animationend",()=>{

            cloud.remove();

        });

    }

}

window.Mist = Mist;