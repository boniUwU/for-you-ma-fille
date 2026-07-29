const sky = new Sky();

const isMobile =
    window.matchMedia("(max-width: 768px)").matches;

sky.createStars(isMobile ? 90 : 350);

const garden = new Garden();

const flowers = new FlowerEngine(garden);

const sunflowers = new SunflowerEngine(garden);

const wind=new Wind();

const backPositions = [
    8,18,28,38,48,58,68,78,88
];

const middlePositions = [
    12,24,36,48,60,72,84
];

const frontPositions = [
    18,32,46,60,74,88
];

// FLORES DEL FONDO

backPositions.forEach(x=>{

    const flower = flowers.createTulip({

        x,
        scale:0.55 + Math.random()*0.18,
        rotation:-8 + Math.random()*16

    });

    garden.addFlower(flower,"back");

    wind.add(flower);

});

// FLORES DEL CENTRO

middlePositions.forEach(x=>{

    const flower = flowers.createTulip({

        x,
        scale:0.8 + Math.random()*0.2,
        rotation:-10 + Math.random()*20

    });

    garden.addFlower(flower,"middle");

    wind.add(flower);

});

// FLORES DEL FRENTE

frontPositions.forEach(x=>{

    const flower = flowers.createTulip({

        x,
        scale:1 + Math.random()*0.25,
        rotation:-12 + Math.random()*24

    });

    garden.addFlower(flower,"front");

    wind.add(flower);

});

const sunflowerPositions = [

    18,
    50,
    82

];

sunflowerPositions.forEach(x=>{

    const sunflower = sunflowers.create({

        x,

        scale:1.05 + Math.random()*0.4,

        rotation:-4 + Math.random()*8

    });

    garden.addFlower(
        sunflower,
        "back"
    );

    wind.add(sunflower);

});




const legendaryMeteor =
    new LegendaryMeteor(
        document.getElementById("sky")
    );

window.petals = new Petals(
    document.getElementById("petals")
);

window.music = new Music();

const intro = new Intro();

window.addEventListener("gardenStart",()=>{

    const moon =
    document.getElementById("moon");

const glow =
    document.getElementById("moonGlow");

setTimeout(()=>{

    moon.style.opacity = 1;

    glow.style.opacity = .9;

},1200);


const isMobileMoon =
    window.matchMedia("(max-width: 768px)").matches;

if (!isMobileMoon) {
moon.animate(

[
    {

        transform:
            "scale(.85)"

    },

    {

        transform:
            "scale(1)"

    }

],

{

    duration:5000,

    fill:"forwards",

    easing:"ease-out"

}

);
}

    new MeteorShower(
        document.getElementById("sky")
    );

    new Fireflies(
        document.getElementById("fireflies")
    );

    new Mist(
        document.getElementById("mist")
    );

    new Aurora(
        document.getElementById("aurora")
    );

});

    const moonRays = new MoonRays(
    document.getElementById("moonLight")
);

    window.addEventListener("gardenStart",()=>{

    new Environment();

    new Parallax();

    new MoonLight();

    new Message();

});

    

    let musicStarted = false;

    document.addEventListener("click", () => {

    if(musicStarted) return;

    musicStarted = true;

    window.music.playAutomatically();

}, { once: true });

    const camera = new Camera();

    window.addEventListener("finalMoment",()=>{

    const glow =
        document.getElementById("finalGlow");

    glow.style.opacity = 1;

    setTimeout(()=>{

        glow.style.opacity = 0;

    },6000);

});
