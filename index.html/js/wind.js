class Wind {

    constructor(){

        

        this.flowers=[];

        this.time=0;

        this.wind = 1;

        this.targetWind = 1;

        this.windTimer = 240;

        this.windStrength = 1;
        this.targetStrength = 1;
        this.changeTimer = 0;
        this.gustActive = false;

        this.gustCooldown =
            600 + Math.random()*600;


        requestAnimationFrame(this.animate.bind(this));

    }

    add(flower){

    this.flowers.push({

        element: flower,

        offset: Math.random()*100,

        speed: 0.3 + Math.random()*0.7,

        amplitude: 2 + Math.random()*6,

        growth: 0,

        delay: Math.random()*2,

        scale: parseFloat(
            flower.style.getPropertyValue("--scale")
        )

    });

}

   animate(){

    this.time += 0.015;

    this.windTimer--;

if(this.windTimer <= 0){

    this.targetWind =
        0.5 + Math.random()*1.5;

    this.windTimer =
        180 + Math.random()*240;

}

this.wind +=
    (this.targetWind - this.wind)
    * 0.02;

    this.changeTimer--;

    if(this.changeTimer <= 0){

    this.targetStrength =
        0.35 + Math.random()*1.4;

    this.changeTimer =
        180 + Math.random()*240;

}

//======================
// RÁFAGAS DE VIENTO
//======================

this.gustCooldown--;

if(this.gustCooldown <= 0){

    this.gustCooldown =
        900 + Math.random()*900;

    this.gustActive = true;

    this.targetWind = 2.4;

    this.targetStrength = 2.2;

    if(window.petals){

        for(let i=0;i<18;i++){

            setTimeout(()=>{

                const flower = this.flowers[
                Math.floor(Math.random()*this.flowers.length)
            ];

            window.petals.spawnFromFlower(
                flower.element
            );

            },i*80);

        }

    }

    setTimeout(()=>{

        this.gustActive = false;

        this.targetWind =
            0.8 + Math.random()*1.3;

        this.targetStrength =
            0.5 + Math.random()*1.2;

    },5000);

}

    this.windStrength +=
    (this.targetStrength - this.windStrength)
    * 0.01;

    this.flowers.forEach(f => {

        if(f.delay > 0){

            f.delay -= 0.016;
            return;

        }

        if(f.growth < 1){

            f.growth += 0.008;

        }

        

        const gust =
    this.wind > 1.3
        ? (this.wind - 1.3) * 6
        : 0;

const angle =

    Math.sin(

        this.time * f.speed +

        f.offset

    ) *

    f.amplitude *

    this.wind +

    gust;

        this.windStrength;

        const scale = f.scale * f.growth;

        const breathing =
    1 + Math.sin(this.time * 0.8 + f.offset) * 0.01;

f.element.style.transform =
    `rotate(${angle}deg) scale(${f.scale * breathing})`;

        f.element.style.opacity = f.growth;

        if(

    this.wind > 1.6 &&

    Math.random() < 0.001 &&

    window.petals

){

    window.petals.spawnFromFlower(f.element);

}
        

    });

    requestAnimationFrame(this.animate.bind(this));

}

}

window.Wind=Wind;