class Point{
     x:number;
     y:number;

     constructor(x:number,y:number){
         this.x=x;
         this.y=y;
     }

     add(point:Point){
         return new Point(this.x+this.y, this.y+this.y)
     }
}

const p1=new Point(0,10);
const p2=new Point(2,10);
const p3=p1.add(p2);
