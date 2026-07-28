class MoonLight{

    constructor(){

        window.addEventListener("finalMoment",()=>{

    const glow =
        document.getElementById("moonGlow");

    glow.style.transition =
        "all 3s ease";

    glow.style.transform =
        "scale(1.35)";

    glow.style.opacity = "1";

    setTimeout(()=>{

        glow.style.transform =
            "scale(1)";

        glow.style.opacity = ".75";

    },7000);

});

        this.moon =
            document.getElementById("moon");

        this.flowers =
            document.querySelectorAll(
                ".tulip,.sunflower"
            );

        this.animate();

    }

    animate(){

        const moon =
            this.moon.getBoundingClientRect();

        const moonX =
            moon.left + moon.width/2;

        const moonY =
            moon.top + moon.height/2;

        this.flowers.forEach(f=>{

            const rect =
                f.getBoundingClientRect();

            const x =
                rect.left + rect.width/2;

            const y =
                rect.top + rect.height/2;

            const dist =
                Math.hypot(
                    x-moonX,
                    y-moonY
                );

            if(dist < 550){

                f.classList.add(
                    "moon-light"
                );

            }else{

                f.classList.remove(
                    "moon-light"
                );

            }

        });

        requestAnimationFrame(
            this.animate.bind(this)
        );

    }

}

window.MoonLight = MoonLight;