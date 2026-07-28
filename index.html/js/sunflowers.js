class SunflowerEngine {

    constructor(garden){

        this.garden = garden;

    }

    create(options={}){

        const svgNS="http://www.w3.org/2000/svg";

        const svg=document.createElementNS(svgNS,"svg");

        svg.setAttribute("viewBox","0 0 180 360");

        svg.setAttribute("width","180");

        svg.setAttribute("height","360");

        svg.classList.add("sunflower");

        svg.style.left=(options.x||50)+"%";

        svg.style.bottom="0";

        svg.style.setProperty(
            "--scale",
            options.scale||1
        );

        svg.style.setProperty(
            "--rotation",
            (options.rotation||0)+"deg"
        );

        //-----------------------------------
        // Tallo
        //-----------------------------------

        const stem = document.createElementNS(svgNS, "rect");

        stem.setAttribute("x", "87");
        stem.setAttribute("y", "110");
        stem.setAttribute("width", "8");
        stem.setAttribute("height", "220");
        stem.setAttribute("rx", "4");
        stem.setAttribute("fill", "#2f9e44");

        svg.appendChild(stem);

        //-----------------------------------
        // Hoja izquierda
        //-----------------------------------

        const leafLeft = document.createElementNS(svgNS,"ellipse");

        leafLeft.setAttribute("cx","65");
        leafLeft.setAttribute("cy","210");
        leafLeft.setAttribute("rx","20");
        leafLeft.setAttribute("ry","48");
        leafLeft.setAttribute("fill","#3fb950");

        leafLeft.setAttribute(
            "transform",
            "rotate(-35 65 210)"
        );

        svg.appendChild(leafLeft);

        //-----------------------------------
        // Hoja derecha
        //-----------------------------------

        const leafRight = document.createElementNS(svgNS,"ellipse");

        leafRight.setAttribute("cx","115");
        leafRight.setAttribute("cy","245");
        leafRight.setAttribute("rx","20");
        leafRight.setAttribute("ry","48");
        leafRight.setAttribute("fill","#2b8a3e");

        leafRight.setAttribute(
            "transform",
            "rotate(35 115 245)"
        );

        svg.appendChild(leafRight);

        //-----------------------------------
        // Centro
        //-----------------------------------

        const center = document.createElementNS(svgNS,"circle");

        center.setAttribute("cx","90");
        center.setAttribute("cy","80");
        center.setAttribute("r","22");

        center.setAttribute("fill","#4a2d11");

        svg.appendChild(center);

    //-----------------------------------
    // Pétalos
    //-----------------------------------

    for(let i = 0; i < 20; i++){

        const petal = document.createElementNS(svgNS,"ellipse");

        petal.setAttribute("cx","90");
        petal.setAttribute("cy","48");

        petal.setAttribute("rx","8");
        petal.setAttribute("ry","24");

        petal.setAttribute("fill","#f5c400");

        petal.setAttribute(
            "transform",
            `rotate(${i*18} 90 80)`
        );

        svg.appendChild(petal);

    }

        //-----------------------------------
        // Centro superior
        //-----------------------------------

        const centerTop = document.createElementNS(svgNS,"circle");

        centerTop.setAttribute("cx","90");
        centerTop.setAttribute("cy","80");
        centerTop.setAttribute("r","22");

        centerTop.setAttribute("fill","#4a2d11");

        svg.appendChild(centerTop);

        svg.style.opacity = "0";
        svg.style.transform =
        `translateX(-50%)
        rotate(${options.rotation || 0}deg)
        scale(0)`;

        svg.dataset.baseRotation = options.rotation || 0;
        
        return svg;

    }

}

window.SunflowerEngine=SunflowerEngine;