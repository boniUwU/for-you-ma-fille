class Fireflies {

    constructor(container){

        window.addEventListener("finalMoment",()=>{

    this.fireflies.forEach(f=>{

        f.element.style.transition =
            "all 2s";

        f.element.style.transform =
            "scale(2)";

        f.element.style.filter =
            "drop-shadow(0 0 14px #b8f5ff)";

    });

    setTimeout(()=>{

        this.fireflies.forEach(f=>{

            f.element.style.transform =
                "scale(1)";

            f.element.style.filter = "";

        });

    },7000);

});

        this.container = container;

        this.fireflies = [];

        this.wind = 1;
        this.targetWind = 1;
        this.windTimer = 240;

        this.create(40);

        this.animate();

    }

    create(total){

        for(let i=0;i<total;i++){

            const fly = document.createElement("div");

            fly.classList.add("firefly");

            this.container.appendChild(fly);

            this.fireflies.push({

                element: fly,

                x: Math.random()*window.innerWidth,

                y: window.innerHeight*0.45 +
                   Math.random()*window.innerHeight*0.45,

                angle: Math.random()*Math.PI*2,

                speed:0.3+Math.random()*0.5,

                turn:(Math.random()-0.5)*0.02,

                size:3+Math.random()*4,

                wave:Math.random()*Math.PI*2,

                targetX:null,

                targetY:null,

                wait:0

            });

        }

    }

    updateWind(){

        this.windTimer--;

        if(this.windTimer<=0){

            this.targetWind=
                0.7+Math.random()*1.2;

            this.windTimer=
                240+Math.random()*240;

        }

        this.wind +=
            (this.targetWind-this.wind)*0.01;

    }

    chooseTarget(f){

        if(f.wait>0){

            f.wait--;

            return;

        }

        if(f.targetX!==null)
            return;

        if(Math.random()>0.002)
            return;

        const flowers=
            document.querySelectorAll(".tulip");

        if(!flowers.length)
            return;

        const flower=
            flowers[
                Math.floor(
                    Math.random()*flowers.length
                )
            ];

        const rect=
            flower.getBoundingClientRect();

        f.targetX=
            rect.left+rect.width/2;

        f.targetY=
            rect.top+60;

    }

    moveFirefly(f){

        if(f.targetX!==null){

            const dx=f.targetX-f.x;
            const dy=f.targetY-f.y;

            const dist=Math.hypot(dx,dy);

            if(dist<8){

                f.wait=
                    120+Math.random()*120;

                f.targetX=null;
                f.targetY=null;

            }else{

                f.x+=dx*0.01;
                f.y+=dy*0.01;

            }

        }

        f.angle+=
            f.turn+
            (Math.random()-0.5)*0.01;

        const speed=
            f.speed*this.wind;

        f.x+=Math.cos(f.angle)*speed;
        f.y+=Math.sin(f.angle)*speed;

        if(f.x<0)
            f.x=window.innerWidth;

        if(f.x>window.innerWidth)
            f.x=0;

        if(f.y<window.innerHeight*0.35)
            f.y=window.innerHeight*0.9;

        if(f.y>window.innerHeight*0.95)
            f.y=window.innerHeight*0.4;

        f.wave+=0.03;

    }

    renderFirefly(f){

        const floatY=
            Math.sin(f.wave)*4;

        f.element.style.left=
            f.x+"px";

        f.element.style.top=
            (f.y+floatY)+"px";

        f.element.style.width=
            f.size+"px";

        f.element.style.height=
            f.size+"px";

    }

    animate(){

        this.updateWind();

        this.fireflies.forEach(f=>{

            this.chooseTarget(f);

            this.moveFirefly(f);

            this.renderFirefly(f);

        });

        requestAnimationFrame(
            this.animate.bind(this)
        );

    }

}

window.Fireflies=Fireflies;