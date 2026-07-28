class MoonRays{

    constructor(container){

        this.container = container;

        this.create();

    }

    create(){

    for(let i=0;i<8;i++){

        const ray =
            document.createElement("div");

        ray.className = "moon-ray";

        ray.style.left =
            (46 + Math.random()*18) + "%";

        ray.style.width =
            (120 + Math.random()*120) + "px";

        ray.style.height =
            (110 + Math.random()*40) + "vh";

        const rotation = -18 + Math.random()*36;

        ray.style.setProperty(
            "--rotation",
            rotation + "deg"
        );

        ray.style.transform =
            `rotate(${rotation}deg)`;

        ray.style.opacity =
            0.04 + Math.random()*0.12;

        ray.style.animationDuration =
            (14 + Math.random()*12) + "s";

        ray.style.animationDelay =
            (-Math.random()*20) + "s";

        this.container.appendChild(ray);

    }

}

}

window.MoonRays=MoonRays;