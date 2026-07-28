class Parallax {

    constructor(){

        this.layers = {

            sky: document.getElementById("sky"),
            back: document.getElementById("flowersLayerBack"),
            middle: document.getElementById("flowersLayerMiddle"),
            front: document.getElementById("flowersLayerFront"),
            grass: document.getElementById("frontGrass"),
            petals: document.getElementById("petals"),
            mist: document.getElementById("mist")

        };

        this.mouseX = window.innerWidth / 2;
        this.mouseY = window.innerHeight / 2;

        window.addEventListener(
            "mousemove",
            this.move.bind(this)
        );

        requestAnimationFrame(
            this.animate.bind(this)
        );

    }

    move(e){

        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

    }

    animate(){

        const x =
            (this.mouseX / window.innerWidth - 0.5);

        const y =
            (this.mouseY / window.innerHeight - 0.5);

        this.layers.sky.style.transform =
            `translate(${x*8}px,${y*8}px)`;

        this.layers.back.style.transform =
            `translate(${x*12}px,${y*10}px)`;

        this.layers.middle.style.transform =
            `translate(${x*18}px,${y*15}px)`;

        this.layers.front.style.transform =
            `translate(${x*25}px,${y*20}px)`;

        this.layers.grass.style.transform =
            `translate(${x*30}px,0px)`;

        this.layers.petals.style.transform =
            `translate(${x*35}px,${y*15}px)`;

        this.layers.mist.style.transform =
            `translate(${x*20}px,${y*10}px)`;

        requestAnimationFrame(
            this.animate.bind(this)
        );

    }

}

window.Parallax = Parallax;