class Camera {

    constructor() {

        this.scale = 1;
        this.targetScale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.time = 0;
        this.running = false;

        this.isMobile = window.matchMedia("(max-width: 768px)").matches;

        window.addEventListener("gardenStart", () => {
            if (!this.isMobile) {
                this.running = true;
            }
        });

        window.addEventListener("finalMoment", () => {
            if (this.isMobile) return;

            this.targetScale = 1.08;

            setTimeout(() => {
                this.targetScale = 1;
            }, 7000);
        });

        requestAnimationFrame(this.animate.bind(this));
    }

    animate() {

        if (this.running && !this.isMobile) {

            this.time += 0.01;

            this.scale +=
                (this.targetScale - this.scale) * 0.02;

            this.offsetX =
                Math.sin(this.time * 0.4) * 1.2;

            this.offsetY =
                Math.cos(this.time * 0.25) * 0.8;

            const breathing =
                Math.sin(this.time * 0.3) * 0.003;

            const garden =
                document.getElementById("garden");

            const sky =
                document.getElementById("sky");

            const transform =
                `translate3d(${this.offsetX}px, ${this.offsetY}px, 0)
                 scale(${this.scale + breathing})`;

            if (garden) {
                garden.style.transform = transform;
            }

            if (sky) {
                sky.style.transform = transform;
            }
        }

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.Camera = Camera;

/*class Camera{

    constructor(){

        this.scale = 1;
        this.targetScale = 1;

        this.offsetX = 0;
        this.offsetY = 0;

        this.time = 0;

        this.running = false;

        window.addEventListener(
            "gardenStart",
            ()=>{

                this.running = true;

            }
        );

        window.addEventListener(
            "finalMoment",
            ()=>{

                this.targetScale = 1.08;

                setTimeout(()=>{

                    this.targetScale = 1;

                },7000);

            }
        );

        requestAnimationFrame(
            this.animate.bind(this)
        );

    }

    animate(){

        if(this.running){

            this.time += 0.01;

            this.scale +=
                (this.targetScale-this.scale)*0.02;

          /*  this.offsetX =
                Math.sin(this.time*0.4)*3;

            this.offsetY =
                Math.cos(this.time*0.25)*2;*/ //cambio

            this.offsetX =
    Math.sin(this.time*0.4)*1.2;

this.offsetY =
    Math.cos(this.time*0.25)*0.8;

            const breathing =
                Math.sin(this.time*0.3)*0.003;

            const garden =
    document.getElementById("garden");//cambio

const sky =
    document.getElementById("sky");

const transform =

    `translate(${this.offsetX}px,${this.offsetY}px)
     scale(${this.scale+breathing})`;

garden.style.transform = transform;

sky.style.transform = transform;//cambio

        }

        requestAnimationFrame(
            this.animate.bind(this)
        );

    }

}

window.Camera = Camera;
