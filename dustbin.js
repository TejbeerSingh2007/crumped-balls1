class DustBin{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

        this.bodyb = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.bodyb)
        this.bodyl = Bodies.rectangle((x-(width/2)), (y-(height*2)),
    }
}