class Garden {

    constructor(){

        this.back =
            document.getElementById("flowersLayerBack");

        this.middle =
            document.getElementById("flowersLayerMiddle");

        this.front =
            document.getElementById("flowersLayerFront");

    }

    addFlower(element, layer="middle"){

        switch(layer){

            case "back":
                this.back.appendChild(element);
                break;

            case "front":
                this.front.appendChild(element);
                break;

            default:
                this.middle.appendChild(element);

        }

    }

}

window.Garden = Garden;