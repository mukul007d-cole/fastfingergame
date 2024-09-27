        function makeBalls() {
            var ballss = "";
        for(var i = 1; i<120; i++) {
            var nums = Math.floor(Math.random()*10);
            ballss += `<div class="ball">${nums}</div>`;
        }
        document.querySelector(".game").innerHTML = ballss;
        }

        var score = 5;
        function runtimer() {
          var timer = 59;
           var myfunc = setInterval(function() {
                timer--;
                if(timer>=0) {
                document.querySelector("#tiimer").textContent = timer;
                 } else{
                    clearInterval(myfunc);
                    gameover();
                  }
            },1000);
        }

        function gethit() {
            var hit = Math.floor(Math.random()*10);
            document.querySelector("#tar").textContent = hit;
        }

        function letsscore() {
            score += 10;
            document.querySelector("#score").textContent = score;
        }

        document.querySelector(".game").addEventListener("click",function(dets){
            if(dets.target.textContent === document.querySelector("#tar").textContent) {
                letsscore();
                gethit();
                makeBalls();
            } else {
                score -= 5;
                document.querySelector("#score").textContent = score;
            }
        });

        function gameover() {
            document.querySelector(".game").innerHTML = `<h1>GAME OVER</h1><button id="startbt" onclick="start()">Play Again</button>`;

        }
        
        function start() {
            makeBalls();
            runtimer();
            gethit();
        }