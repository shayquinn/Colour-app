$(document).ready(function(){
    $("#button").click(function(){
        var num = $("#num").val();
        var point = $("#point").val();
        var curve = $("#curve").val();
        build(num, curve, point);
    });
    function build(num, curve, point){
        $( "#maindiv" ).empty();
        var $button0 = $('#maindiv');
        var inbull = false;
        var bullone;
        var tog = 0;
        var tog1 = 0;
        var tog2 = 0;
        var count = 0;
         for( var i=0;i<num;i++){
             $button0.append($('<div/>', {
                'id': 'd' + i  + '',
                'class': 'div'
             }));
         }
         var len = Number(num) + Number(curve);
         var halfcvrve = curve/2;
         for( var j=0;j<len;j++){
            var val;
            //even numbers
            if(curve%2===0){
                if(tog === 0){
                    bullone = true;
                }else if(tog == halfcvrve){
                    bullone = false;
                }
                if(bullone===true){
                    val = (99.9/(halfcvrve))*tog;
                    tog++;
                }else if(bullone===false){
                    val = (99.9/(halfcvrve))*tog;
                    tog--;
                }
            }
            //odd numbers
            if(curve%2==1){
                var oodcurve = (curve-1)/2;
                if(tog1 === 0){
                    bullone = true;
                    inbull = false;
                }
                else if(tog1 == (oodcurve)){
                    bullone = false;
                }
                if(bullone===true){
                    val = (99.9/(oodcurve))*tog1;
                    tog1++;
                }
                if(bullone===false){
                    if(inbull === true){
                        val = (99.9/(oodcurve))*tog1;
                        tog1--;
                    }
                    if(inbull === false){
                        val = (99.9/(oodcurve))*tog1;
                        tog2 = tog1;
                        inbull = true;
                    }
                }
            }
            if(j>=(Number(curve)-Number(point))){
                var id = "#d"+count+"";
                $(id).css({ backgroundColor:  newcolor(val)});
                count++;
            }
        }
    }
});
function newcolor(val){
    var self = this,
            red = new Color(255, 0, 0),
            green = new Color(0, 255, 0),
            blue = new Color(0, 0, 255),
            start = red,
            end = green;
              if (val > 50) {
            start = green;
               end = blue;
            val = val % 51;
        }
        var startColors = start.getColors(),
            endColors = end.getColors();
        var r = Interpolate(startColors.r, endColors.r, 50, val);
        var g = Interpolate(startColors.g, endColors.g, 50, val);
        var b = Interpolate(startColors.b, endColors.b, 50, val);
        var re = "rgb(" +  r + "," +  g + "," + b + ")";
          return re;
}
function Interpolate(start, end, steps, count) {
    var s = start,
        e = end,
        final = s + (((e - s) / steps) * count);
    return Math.floor(final);
}
function Color(_r, _g, _b) {
    var r, g, b;
    var setColors = function(_r, _g, _b) {
        r = _r;
        g = _g;
        b = _b;
    };
    setColors(_r, _g, _b);
    this.getColors = function() {
        var colors = {
            r: r,
            g: g,
            b: b
        };
        return colors;
    };
}
