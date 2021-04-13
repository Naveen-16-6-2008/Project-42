class Drops{
    constructor (x, y,r) {
        var options={
        friction: 0.1
        }
       
        this. rain = Bodies. circle(x, y,5, options);
    }
        display () {
        var pos = this.body.position;
        var angle = this. body. angle;
        
        push() ;
        translate(pos.x, pos.y);
        rotate (angle);
        
        noStroke( ) ;
        fill(this.color)
        ellipseMode (RADIUS) ;
        ellipse(0, 0, this. r, this.r);
        pop (); 
        }
        update() {
            if(this. rain. position.y > height){
                    
            Matter. Body . setPosition(this. rain, {x: random(0, 400), y:random(0, 408)})
            }
        }  
    };
   