var Sprite = Laya.Sprite;
var WebGL = Laya.WebGL;
var Map = /** @class */ (function () {
    function Map() {
        Laya.init(1024, 1024, WebGL);
        this.createMap();
    }
    Map.prototype.createMap = function () {
        var W = 1024;
        var H = 1024;
        var h = 32;
        var arrayX0 = [];
        var arrayY0 = [];
        var arrayWY = [];
        var arrayXH = [];
        var i = 0;
        var xt = W;
        var yt = 0.5 * W;
        while (i <= W) {
            var x = 2 * h * i;
            if (x > W)
                break;
            arrayX0.push([x, 0]);
            arrayXH.push([x, yt]);
            arrayY0.push([0, h * i]);
            arrayWY.push([xt, h * i]);
            i++;
        }
        var L = arrayX0.length;
        var line = new Sprite();
        for (i = 0; i < L; i++) {
            line.graphics.drawLine(arrayX0[i][0], arrayX0[i][1], arrayY0[i][0], arrayY0[i][1], "#ff0000", 1);
            line.graphics.drawLine(arrayXH[i][0], arrayXH[i][1], arrayWY[i][0], arrayWY[i][1], "#ff0000", 1);
        }
        arrayXH = arrayXH.reverse();
        arrayWY = arrayWY.reverse();
        for (i = 0; i < L; i++) {
            line.graphics.drawLine(arrayX0[i][0], arrayX0[i][1], arrayWY[i][0], arrayWY[i][1], "#ff0000", 1);
            line.graphics.drawLine(arrayY0[i][0], arrayY0[i][1], arrayXH[i][0], arrayXH[i][1], "#ff0000", 1);
        }
        Laya.stage.addChild(line);
    };
    return Map;
}());
new Map();
//# sourceMappingURL=Map.js.map