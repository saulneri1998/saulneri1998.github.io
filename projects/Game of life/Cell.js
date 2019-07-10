function Cell (a, x, y) {
    this.alive = a;
    this.nextAlive = this.alive;
    this.nAlive;
    this.myX = x;
    this.myY = y;
    
    this.changeState = function (n) {
        this.nAlive = n;
        
        //print(this.alive, this.nAlive);
        
        
        if (this.alive && this.nAlive < 2) {
            this.nextAlive = false;
            print("dies");
        } else if (this.alive && (this.nAlive == 2 || this.nAlive == 3)) {
            this.nextAlive = true;
            print("lives");
        } else if (this.alive && this.nAlive > 3) {
            this.nextAlive = false;
            print("dies");
        } else if (!this.alive && this.nAlive == 3) {
            this.nextAlive = true;
            print("lives");
        }
    }
    
    this.show = function () {
        //noStroke();
        if (!this.alive) {
            fill(255);
        } else {
            fill(0);
        }
        rect(this.myX, this.myY, 20, 20);
    }
    
    this.update = function () {
        this.alive = this.nextAlive;
    }
}