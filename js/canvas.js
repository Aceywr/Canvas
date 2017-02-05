window.requestAnimFrame = 
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    return window.setTimeout(callback, 1000/60);
                };

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 420;
canvas.height = 420;

function maprender () {
    ctx.fillStyle = "rgba(0, 0, 0, 0.01)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function Obj (height, width, locX, locY, maxrag, minrag, vel) {
    this.height = height;
    this.width = width;
    this.locX = locX;
    this.locY = locY;
    this.minrag = minrag;
    this.maxrag = maxrag;
    this.vel =vel;

}
Obj.prototype.move = function () {
    this.locX = this.locX + this.velX;
    this.locY = this.locY + this.velY; 
  
}

Obj.prototype.change = function () {
     if (this.locX >= this.maxrag && this.locY >= this.maxrag) {
        this.velX = -this.vel;
        this.velY = 0;
    }else if (this.locY >= this.maxrag && this.locX == this.minrag) {
        this.velX = 0;
        this.velY = -this.vel;
    }else if (this.locX >= this.maxrag && this.locY == this.minrag) {
        this.velX = 0;
        this.velY = this.vel;
    }else if (this.locX ==this.minrag && this.locY == this.minrag) {
        this.velX = this.vel;
        this.velY = 0;
    }
}

Obj.prototype.render = function () {
    ctx.fillStyle = "#fff";
    ctx.fillRect(this.locX, this.locY, this.width, this.height);
}
Obj.prototype.update =function () {
    this.change()
    this.render();
    this.move();
}

var arr = new Array();
var hw = parseInt(document.getElementById("hw").value);

var sp = parseInt(document.getElementById("sp").value);


for (var i = 0; i<100/hw; i++) {
    var m = 2*hw*i;
    arr[i] = new Obj(hw, hw, hw+m, hw+m, 400-m, hw+m, sp);
}


            
(function Loop () {
    maprender();
   for (var i = 0; i<100/hw; i++) {
       arr[i].update();
   }
    requestAnimFrame(Loop);
})();      

