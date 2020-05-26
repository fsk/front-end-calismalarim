var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');
var W = canvas.width;
var H = canvas.height;


/*
* function of draw Square
* function of draw circle
* init function
* draw function
* */

function square() {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.draw = function () {
        c.fillRect(this.x, this.y, this.w, this.h);
    }
}

var circle = {
    x : W/2,
    y : H/2,
    r : 10,
    vx : 3,
    vy : 3,
    draw : function () {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
        c.fill();
    }
};

//score
var score = 0;


// player 1

var player1 = new square();
player1.x = 0;
player1.y = H/2 - 20;
player1.w = 5;
player1.h = 35;

// player 2

var player2 = new square();
player2.x = W - 5.3;
player2.y = H/2 - 20;
player2.w = 5;
player2.h = 35;

var mouseMove = function (e) {
    player1.y = e.clientY - 60;
    player2.y = e.clientY - 60;
};

function draw() {
    c.clearRect(0,0,W,H);
    c.fillText("skor : "+score,W/2 - 20,10);
    player1.draw();
    player2.draw();
    circle.draw();

    if (circle.y + circle.r > H ||circle.y < 0){
        circle.vy = circle.vy* -1;
    }

    if (circle.x - circle.r < player1.x + player1.w || circle.x + circle.r > player2.x){
        if (circle.x - circle.r < player1.x + player1.w){
            if (circle.y + circle.r > player1.y && circle.y < player1.y + player1.h){
                score++;
            }else
                clearInterval(init);
        }else if (circle.x + circle.r > player2.x){
            if (circle.y + circle.r > player2.y && circle.y < player2.y + player2.h){
                score++;
            }else
                clearInterval(init);
        }
        circle.vx = circle.vx * - 1;
    }

    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;

    canvas.onmousemove = mouseMove;
}

var init = setInterval(draw,10);


