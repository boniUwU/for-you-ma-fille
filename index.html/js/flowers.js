class FlowerEngine {

    constructor(garden) {
        this.garden = garden;
    }

    createTulip(options = {}) {
        

        const svgNS = "http://www.w3.org/2000/svg";

        const svg = document.createElementNS(svgNS, "svg");
        svg.dataset.baseRotation = options.rotation || 0;
        const colors=[

"#5b8cff",
"#4f8fff",
"#3f7df0",
"#78a7ff",
"#6ba6ff",
"#8cbcff"

];

const petalColor=

colors[

Math.floor(Math.random()*colors.length)

];

const bloom = 0.85 + Math.random() * 0.35;

const stemHeight =
    165 + Math.random()*30;

const stemWidth =
    5 + Math.random()*2;

const leafScale =
    0.85 + Math.random()*0.35;

const leafRotation =
    -30 + Math.random()*20;
     //-----------------------------------
        // DEFINICIONES
        //-----------------------------------

        const defs = document.createElementNS(svgNS,"defs");
        const gradientId =
         "petalGradient_" + Math.random().toString(36).slice(2);
        const petalGradient =
        document.createElementNS(svgNS,"linearGradient");

        petalGradient.setAttribute("id", gradientId);
        petalGradient.setAttribute("x1","0%");
        petalGradient.setAttribute("y1","0%");
        petalGradient.setAttribute("x2","0%");
        petalGradient.setAttribute("y2","100%");

        const stop1=document.createElementNS(svgNS,"stop");
        stop1.setAttribute("offset","0%");
        stop1.setAttribute("stop-color", petalColor);

        const stop2=document.createElementNS(svgNS,"stop");
        stop2.setAttribute("offset","100%");
        stop2.setAttribute("stop-color","#1f4fb8");

        petalGradient.appendChild(stop1);
        petalGradient.appendChild(stop2);

        defs.appendChild(petalGradient);

        svg.appendChild(defs);

        svg.setAttribute("viewBox", "0 0 120 300");
        svg.setAttribute("width", "120");
        svg.setAttribute("height", "300");

        svg.classList.add("tulip");
        svg.style.setProperty(
    "--bloom",
    0.98 + Math.random()*0.05
);

        //-----------------------------------
        // Posición
        //-----------------------------------

        svg.style.left = (options.x || 50) + "%";

        svg.style.bottom = "0px";

        svg.style.setProperty(
    "--scale",
    options.scale || 1
);

svg.style.setProperty(
    
    "--rotation",
    (options.rotation || 0) + "deg"
    
    
);

svg.style.setProperty(
    "--delay",
    (Math.random()*6)+"s"
);

svg.style.setProperty(
    "--duration",
    (5 + Math.random() * 4) + "s"
);

svg.style.setProperty(
    "--amplitude",
    (2 + Math.random() * 5) + "deg"
);


    
        //-----------------------------------
        // Tallo
        //-----------------------------------
    
        const stem = document.createElementNS(svgNS, "rect");
        stem.setAttribute(
    "transform",
    `rotate(${
        -1 + Math.random()*2
    } 60 260)`
);
        stem.classList.add("stem");
        stem.setAttribute("x","57");
        stem.setAttribute("y","80");
        stem.setAttribute(
    "width",
    stemWidth
);

stem.setAttribute(
    "height",
    stemHeight
);
       /* stem.setAttribute("width","6");
        stem.setAttribute("height","180");*/
        stem.setAttribute("rx","3");
        stem.setAttribute("fill","#2f9e44");

        svg.appendChild(stem);

        

        //-----------------------------------
        // Hoja izquierda
        //-----------------------------------

        const leafLeft = document.createElementNS(svgNS,"ellipse");

        leafLeft.classList.add("leaf");
        leafLeft.setAttribute("cx","42");
        leafLeft.setAttribute("cy","170");
        leafLeft.setAttribute("rx","16");
        leafLeft.setAttribute("ry","40");
        leafLeft.setAttribute("fill","#37b24d");

        /*leafLeft.setAttribute(
            "transform",
            "rotate(-35 42 170)"
        );*/
        leafLeft.setAttribute(
    "transform",
    `rotate(${leafRotation} 42 170)
     scale(${leafScale})`
);

        svg.appendChild(leafLeft);

        //-----------------------------------
        // Hoja derecha
        //-----------------------------------

        const leafRight = document.createElementNS(svgNS,"ellipse");

        leafRight.classList.add("leaf");
        leafRight.setAttribute("cx","78");
        leafRight.setAttribute("cy","190");
        leafRight.setAttribute("rx","16");
        leafRight.setAttribute("ry","40");
        leafRight.setAttribute("fill","#2b8a3e");
        leafRight.setAttribute(
            "transform",
           /* "rotate(35 78 190)"*/
           `rotate(${-leafRotation} 78 190)
 scale(${leafScale})`
        );

        svg.appendChild(leafRight);

       
                const shadow =
        document.createElementNS(svgNS,"ellipse");

        shadow.setAttribute("cx","60");
        shadow.setAttribute("cy","83");

        shadow.setAttribute("rx","20");
        shadow.setAttribute("ry","6");

        shadow.setAttribute("fill","rgba(0,0,0,.15)");

        svg.appendChild(shadow);

        // ===== Pétalo trasero izquierdo =====
        const backLeft = document.createElementNS(svgNS, "path");

        backLeft.classList.add("petal");
        backLeft.style.setProperty(
    "--delay",
    (Math.random()*3)+"s"
);
        backLeft.style.transformOrigin="60px 82px";
        backLeft.style.animation=
        "petalBreath 5.5s ease-in-out infinite";
        backLeft.style.animationDelay=
        (Math.random()*4)+"s";
        backLeft.setAttribute(
            "d",
            "M48 82 C30 45 35 18 58 12 C50 40 54 62 58 82 Z"
        );

        backLeft.setAttribute(
            "fill",
        `url(#${gradientId})`        );

        svg.appendChild(backLeft);

        // ===== Pétalo trasero derecho =====
        const backRight = document.createElementNS(svgNS, "path");

        backRight.classList.add("petal");
        backLeft.style.setProperty(
    "--delay",
    (Math.random()*3)+"s"
);
        backRight.style.transformOrigin="60px 82px";
        backRight.style.animation=
        "petalBreath 5.5s ease-in-out infinite";
        backRight.style.animationDelay=
        (Math.random()*4)+"s";
        backRight.setAttribute(
            "d",
            "M72 82 C90 45 85 18 62 12 C70 40 66 62 62 82 Z"
        );

       backRight.setAttribute(
            "fill",
        `url(#${gradientId})`        );

        svg.appendChild(backRight);

        // ===== Pétalo central =====
        const center = document.createElementNS(svgNS, "path");

        center.classList.add("petal");
        backLeft.style.setProperty(
    "--delay",
    (Math.random()*3)+"s"
);
        center.style.transformOrigin = "60px 82px";
        center.style.animation =
            "petalBreath 5s ease-in-out infinite";
        center.style.animationDelay =
            (Math.random()*4)+"s";
        center.setAttribute(
    "d",
    `
    M60 82
    C${60 - 22*bloom} ${42}
     ${60 - 14*bloom} ${6}
     60 0
    C${60 + 14*bloom} ${6}
     ${60 + 22*bloom} ${42}
     60 82 Z
    `
);

        center.setAttribute(
            "fill",
        `url(#${gradientId})`        );

        svg.appendChild(center);

        // ===== Pétalo frontal izquierdo =====
        const frontLeft = document.createElementNS(svgNS, "path");

        frontLeft.classList.add("petal");
        backLeft.style.setProperty(
    "--delay",
    (Math.random()*3)+"s"
);
        frontLeft.style.transformOrigin="60px 82px";
        frontLeft.style.animation=
        "petalBreath 4.8s ease-in-out infinite";
        frontLeft.style.animationDelay=
        (Math.random()*4)+"s";
                frontLeft.setAttribute(
            "d",
            `
            M60 82
            C${38 - bloom*3} 55
            ${34 - bloom*4} 28
            ${48 - bloom*3} 18
            C54 40 56 60 60 82 Z
            `
        );

        frontLeft.setAttribute(
            "fill",
        `url(#${gradientId})`        );

        svg.appendChild(frontLeft);

        // ===== Pétalo frontal derecho =====
        const frontRight = document.createElementNS(svgNS, "path");
        
    
        frontRight.classList.add("petal");
        backLeft.style.setProperty(
    "--delay",
    (Math.random()*3)+"s"
);
        frontRight.style.transformOrigin="60px 82px";
        frontRight.style.animation=
        "petalBreath 4.8s ease-in-out infinite";
        frontRight.style.animationDelay=
        (Math.random()*4)+"s";
        frontRight.setAttribute(
            "d",
            `
            M60 82
            C${82 + bloom*3} 55
            ${86 + bloom*4} 28
            ${72 + bloom*3} 18
            C66 40 64 60 60 82 Z
            `
        );

        frontRight.setAttribute(
            "fill",
        `url(#${gradientId})`        );

        svg.appendChild(frontRight);

        const petals = [

    backLeft,
    backRight,
    center,
    frontLeft,
    frontRight

];

petals.forEach(p => {

    p.animate(

        [

            {
                filter: "brightness(1)"
            },

            {
                filter: "brightness(1.12)"
            },

            {
                filter: "brightness(1)"
            }

        ],

        {

            duration:
                2500 + Math.random()*3000,

            iterations: Infinity,

            easing: "ease-in-out"

        }

    );

});

                // Brillo
        const shine = document.createElementNS(svgNS, "ellipse");

        shine.setAttribute("cx", "60");
        shine.setAttribute("cy", "28");
        shine.setAttribute("rx", "4");
        shine.setAttribute("ry", "10");
        shine.setAttribute("fill", "rgba(255,255,255,.35)");

        svg.appendChild(shine);

        svg.style.opacity = "0";
        svg.style.transform =
        `translateX(-50%)
        rotate(${options.rotation || 0}deg)
        scale(0)`;
        

        // Devolver el SVG
        return svg;
                
    }
    

}