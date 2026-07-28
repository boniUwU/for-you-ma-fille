class Sky {

    constructor() {

        this.starContainer = document.getElementById("stars");
        this.shootingContainer = document.getElementById("shootingStars");

    }

    createStars(amount = 300) {

        for (let i = 0; i < amount; i++) {

            const star = document.createElement("div");

            star.className = "star";

            const size = Math.random() * 4 + .5;

            star.style.width = size + "px";
            star.style.height = size + "px";
            star.style.opacity =
            0.25 + Math.random() * 0.75;
            star.style.animationDuration =
            (2 + Math.random() * 5) + "s";
            star.style.animationDelay =
            (Math.random() * 5) + "s";

            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";

            star.style.animationDelay = Math.random() * 6 + "s";
            star.style.animationDuration = (2 + Math.random() * 5) + "s";

            
            const colors = [
    "#ffffff",
    "#eef6ff",
    "#dceeff",
    "#f8fbff",
    "#d7ecff"
];

star.style.background =
    colors[Math.floor(Math.random() * colors.length)];
    star.style.boxShadow = `
    0 0 ${2 + Math.random()*6}px white,
    0 0 ${6 + Math.random()*14}px #8ecbff
    `;

this.starContainer.appendChild(star);

        }

    }

}

window.Sky = Sky;