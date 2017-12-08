import Point = Laya.Point;

class IsoObject
{
    private _position:Point3D;
    private _size:number;
    private _walkable:boolean = false;
    private _x:number;
    private _y:number;

    constructor(size:number)
    {
        this._size = size;
        this._position = new Point3D();
        this.updateScreenPosition();
    }

    private updateScreenPosition():void
    {
        let screenPos:Point = IsoUtils.isoToScreen(this._position);
        this._x = screenPos.x;
        this._y = screenPos.y;
    }

}