class Aurora{

    constructor(container){

        window.addEventListener("finalMoment",()=>{

    document
    .querySelectorAll(".aurora-band")
    .forEach(band=>{

        band.style.transition =
            "opacity 3s";

        band.style.opacity = ".55";

    });

    setTimeout(()=>{

        document
        .querySelectorAll(".aurora-band")
        .forEach(band=>{

            band.style.opacity = ".22";

        });

    },7000);

});

        this.container = container;

        this.create();

    }

    create(){

        const colors = [

            "rgba(0,255,220,.22)",
            "rgba(90,180,255,.20)",
            "rgba(120,110,255,.18)"

        ];

        for(let i=0;i<24;i++){

            const beam = document.createElement("div");

            beam.className = "aurora-beam";

            beam.style.left =
                (i*5 - 10) + "%";

            beam.style.animationDelay =
                (Math.random()*8) + "s";

            beam.style.animationDuration =
                (12 + Math.random()*10) + "s";

            beam.style.background =
                colors[
                    Math.floor(
                        Math.random()*colors.length
                    )
                ];

            beam.style.height =
                (55 + Math.random()*25) + "%";

            beam.style.opacity =
                0.12 + Math.random()*0.15;

            this.container.appendChild(beam);

        }

    }

}

window.Aurora = Aurora;