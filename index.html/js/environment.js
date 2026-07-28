class Environment{

    constructor(){

        this.phase = 0;

        this.target = 1;

        this.timer = 600;

        requestAnimationFrame(
            this.animate.bind(this)
        );

    }

    animate(){

        this.timer--;

        if(this.timer <= 0){

            this.target =
                0.8 + Math.random()*0.7;

            this.timer =
                900 + Math.random()*900;

        }

        this.phase +=
            (this.target-this.phase)*0.003;

        document.documentElement.style.setProperty(
            "--moonIntensity",
            this.phase
        );

        requestAnimationFrame(
            this.animate.bind(this)
        );

    }

}

window.Environment=Environment;