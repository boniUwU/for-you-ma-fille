class LegendaryMeteor{

    constructor(container){

        this.container = container;

        this.start();

    }

    start(){

        setTimeout(()=>{

            this.spawn();

            this.start();

        },45000 + Math.random()*45000);

    }

    spawn(){

        const meteor =
            document.createElement("div");

        meteor.className = "legendary-meteor";

        meteor.style.top =
            (5 + Math.random()*20) + "%";

        meteor.style.left = "-250px";

        this.container.appendChild(meteor);

        const trail = setInterval(()=>{

    const spark = document.createElement("div");

    spark.className = "meteor-spark";

    const rect = meteor.getBoundingClientRect();

    spark.style.left = (rect.left + 5) + "px";
    spark.style.top = (rect.top + 5) + "px";

    spark.style.setProperty(
        "--dx",
        (-20 + Math.random()*40) + "px"
    );

    spark.style.setProperty(
        "--dy",
        (20 + Math.random()*40) + "px"
    );

    this.container.appendChild(spark);

    spark.addEventListener("animationend",()=>{

        spark.remove();

    });

},25);

        const flash =
            document.getElementById("skyFlash");

        if(flash){

            flash.style.opacity = .35;

            setTimeout(()=>{

                flash.style.opacity = 0;

            },500);

        }

        meteor.addEventListener("animationend",()=>{

    clearInterval(trail);

    meteor.remove();

});

    }

}

window.LegendaryMeteor = LegendaryMeteor;