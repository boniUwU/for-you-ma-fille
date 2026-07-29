class Camera{

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

            this.offsetX =
                Math.sin(this.time*0.4)*3;

            this.offsetY =
                Math.cos(this.time*0.25)*2;

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
