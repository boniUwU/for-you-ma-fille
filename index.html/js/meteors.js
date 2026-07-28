class MeteorShower {

    constructor(container){

        this.container = container;

        this.start();

    }

    start(){

        this.spawnMeteor();

        const next = 6000 + Math.random() * 12000;

        setTimeout(() => this.start(), next);

    }

    spawnMeteor(){

    const meteor = document.createElement("div");

    meteor.classList.add("meteor");

    document
.getElementById("sky")
.classList.add("flash");

document
.querySelectorAll(".tulip,.sunflower")
.forEach(f=>{

    f.classList.add("flashFlower");

});

setTimeout(()=>{

    document
    .getElementById("sky")
    .classList.remove("flash");

    document
    .querySelectorAll(".flashFlower")
    .forEach(f=>{

        f.classList.remove(
            "flashFlower"
        );

    });

},700);

    const length = 120 + Math.random()*160;

    meteor.style.width = length + "px";

    meteor.style.opacity =
        0.6 + Math.random()*0.4;

    const head = document.createElement("div");

    head.classList.add("meteor-head");

    meteor.appendChild(head);

    meteor.style.left = (Math.random()*80 + 10) + "%";

    meteor.style.top = (Math.random()*35) + "%";

    meteor.style.animationDuration =
        (1 + Math.random()*0.8) + "s";

    this.container.appendChild(meteor);

    const flash =
    document.getElementById("skyFlash");

flash.classList.add("active");

setTimeout(()=>{

    flash.classList.remove("active");

},500);

    meteor.addEventListener("animationend", () => {

        meteor.remove();

    });

    }

}

window.MeteorShower = MeteorShower;