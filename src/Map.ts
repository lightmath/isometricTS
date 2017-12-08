import Sprite = Laya.Sprite;
import WebGL = Laya.WebGL;

class Map {

    constructor()
    {
        Laya.init(1024, 1024, WebGL);
        this.createMap();
    }

    private createMap():void
    {
        let W:number = 1024;
        let H:number = 1024;
        let h:number = 32;
        let arrayX0:any [] = [];
        let arrayY0:any [] = [];
        let arrayWY:any [] = [];
        let arrayXH:any [] = [];
        
        let i:number = 0;
        let xt:number = W;
        let yt:number = 0.5*W;
        while(i<=W)
        {
            let x:number = 2*h*i;
            if(x > W) break;
            arrayX0.push([x, 0]);
            arrayXH.push([x, yt]);
            arrayY0.push([0, h*i]);
            arrayWY.push([xt, h*i]);
            i++;
        }

        let L:number = arrayX0.length;
        let line:Sprite = new Sprite();
        for(i=0;i<L;i++)
        {
            line.graphics.drawLine(arrayX0[i][0], arrayX0[i][1], arrayY0[i][0], arrayY0[i][1], "#ff0000", 1);
            line.graphics.drawLine(arrayXH[i][0], arrayXH[i][1], arrayWY[i][0], arrayWY[i][1], "#ff0000", 1);
        }
        arrayXH = arrayXH.reverse();
        arrayWY = arrayWY.reverse();
        for(i=0;i<L;i++)
        {
            line.graphics.drawLine(arrayX0[i][0], arrayX0[i][1], arrayWY[i][0], arrayWY[i][1], "#ff0000", 1);
            line.graphics.drawLine(arrayY0[i][0], arrayY0[i][1], arrayXH[i][0], arrayXH[i][1], "#ff0000", 1);
        }
        Laya.stage.addChild(line);
    }
}


new Map();
