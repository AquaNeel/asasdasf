AFRAME.registerComponent("map-rotation",{
    schema:{
        speedOfRotation:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown", (e) =>{
            if(e.key === "ArrowRight"){
                if(this.data.speedOfRotation<0.1){
                    this.data.speedOfRotation += 0.01
                }
            }
            if(e.key === "ArrowLeft"){
                if(this.data.speedOfRotation >- 0.1){
                    this.data.speedOfRotation -= 0.01
                }
            }
        })
    },
    tick:function(){
        var mapRotation = this.el.getAttribute("rotation")
        mapRotation.y += this.data.speedOfRotation

        this.el.setAttribute("rotation",{
            x:mapRotation.x,
            y:mapRotation.y,
            z:mapRotation.z,
        })
    }
})

AFRAME.registerComponent("car-movement",{
    schema:{
        speedOfRotation:{type:"number",default:0},
        speedOfAscent:{type:"number",default:0},
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.speedOfRotation = this.el.getAttribute("rotation")
            this.data.speedOfAscent = this.el.getAttribute("position")

            var carRotation = this.el.getAttribute("rotation")
            var carPosition = this.el.getAttribute("position")

            if(e.key === "ArrowRight"){
                if (planeRotation.x < 10){
                    planeRotation.x += 0.5
                    this.el.setAttribute("rotation",carRotation)
                }
            }
            if (e.key === "ArrowLeft"){
                if(planeRotation.x > -10){
                    planeRotation.z += 0.5
                    this.el.setAttribute("rotation",carPositionRotation)
                }
            }
            if(e.key === "ArrowDown"){
                if(planeRotation.z > -10){
                    planeRotation.z -= 0.5
                    this.el.setAttribute("rotation",planeRotation)
                }
                if(planePosition.y > -2){
                    planePosition.y -= 0.01
                    this.el.setAttribute("position",planePosition)
                }
            }
        })
    },
    tick:function(){
        var isGameOver = this.el.getAttribute("game-play").isGameOver
        if(isGameOver){
            this.el.body.angularVelocity.set(0.1,0,0)
            const element = document.querySelector("#game_over_text")
            element.setAttribute("visible",true)
            return
        }
    }
})