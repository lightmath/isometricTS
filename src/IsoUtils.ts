import Point = Laya.Point;

class IsoUtils
{
    constructor(){}

    public static isoToScreen(pos:Point3D):Point
    {
        let screenX:number = pos.x - pos.z;
        let screenY:number = 1.2247*pos.y + .5*(pos.x+pos.z);
        return new Point(screenX, screenY);
    }


    public static screenToIso(point:Point):Point3D
    {
        let xpos:number = point.y + .5*point.x;
        let ypos:number = 0;
        let zpos:number = point.y - 0.5*point.x;
        return new Point3D(xpos, ypos, zpos);
    }
}