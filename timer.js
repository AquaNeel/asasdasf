AFRAME.registerComponent("game-play",{
    init:function(){
        var duration=120
        const timerEl = document.querySelector("#timer")
        this.startTimer(duration,timerEl)
    },
    startTimer:function(duration,timerEl){
        var minutes
        var seconds

        var timer = setInterval(countDown,1000)

        function countDown(){
            if(duration >= 0){
                minutes = parseInt(duration / 60)
                seconds = parseInt(duration % 60)
                if(minutes < 10){
                    minutes = "0" + minutes
                }
                if(seconds < 10){
                    seconds = "0" + seconds
                }

                timerEl.setAttribute("text"<{
                    value:minutes + ":" + seconds,
                })

                duration -= 1
            }
            else{
                clearInterval(timer)
            }
        }
    }
})