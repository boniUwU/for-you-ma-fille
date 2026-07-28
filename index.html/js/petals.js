class Petals{

    constructor(container){

        this.container = container;

        window.addEventListener("finalMoment",()=>{

    this.celebration();

});

        setInterval(()=>{

    if(Math.random() < 0.6){

        this.rain();

    }

},1200);

        this.start();

    }

    start(){

        this.spawn();

        setTimeout(()=>{

            this.start();

        },3000+Math.random()*5000);

    }

    spawn(){

        const petal=document.createElement("div");

        petal.classList.add("floating-petal");

        petal.style.left=
            (10+Math.random()*80)+"%";

        petal.style.top=
            (10+Math.random()*20)+"%";

        petal.style.setProperty(
            "--drift",
            (-120+Math.random()*240)+"px"
        );

        petal.style.animationDuration=
            (8+Math.random()*5)+"s";

        document.getElementById("garden")
        .appendChild(petal);

        petal.addEventListener("animationend",()=>{

            petal.remove();

        });

    }

    spawnFromFlower(flower){

        const rect =
            flower.getBoundingClientRect();

        const petal =
            document.createElement("div");

        petal.classList.add("floating-petal");

        petal.style.left =
            (rect.left + rect.width/2) + "px";

        petal.style.top =
            (rect.top + 20) + "px";

        petal.style.setProperty(

            "--drift",

            (80 + Math.random()*140) + "px"

        );

        petal.style.animationDuration =
            (5 + Math.random()*3) + "s";

        this.container.appendChild(petal);

        petal.addEventListener(

            "animationend",

            ()=>petal.remove()

        );

    }

    rain(){

    const petal =
        document.createElement("div");

    petal.className = "petalParticle";

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    petal.style.top = "-40px";

    petal.style.opacity =
        0.35 + Math.random() * 0.45;

    petal.style.transform =
        `rotate(${Math.random()*360}deg)`;

    this.container.appendChild(petal);

    let x = parseFloat(petal.style.left);
    let y = -40;

    const speed =
        0.8 + Math.random()*1.6;

    const drift =
        (Math.random()-0.5)*0.9;

    const rotate =
        (Math.random()-0.5)*3;

    let angle = Math.random()*360;

    const animate = ()=>{

        y += speed;

        x += drift;

        angle += rotate;

        petal.style.left = x+"px";
        petal.style.top = y+"px";

        petal.style.transform =
            `rotate(${angle}deg)`;

        if(y > window.innerHeight + 40){

            petal.remove();

            return;

        }

        requestAnimationFrame(animate);

    };

    animate();

}

    celebration(){

    let total = 0;

    const rain = setInterval(()=>{

        for(let i=0;i<6;i++){

            this.rain();

        }

        total++;

        if(total >= 40){

            clearInterval(rain);

        }

    },120);

}

}

window.Petals=Petals;