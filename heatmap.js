/*
heatmap.jquery v1.0
https://github.com/msuz/heatmap.jquery
*/
; (function($) {

  $.fn.heatmap = function(n, params) {
    var $self = this;
    var conf = $.extend({
      'mode': 'default',
      'min': 0.0,
      'max': 1.0,
    }, params);
    
    var x = (n - conf.min) / (conf.max - conf.min);
    console.log(n, x);
    var rgb = $self.heatmapCalc(conf.mode, x);
    $self.css(
      'background-color',
      'rgb(' + rgb.join(',') + ')'
    );
    
    return $self;
  };

  $.fn.heatmapCalc = function(name, n) {
    return _calcFunctions[name](n);
  };

  var _calcFunctions = new Array();
  
  _calcFunctions.white = function(n) {
    return [255, 255, 255];
  };
  
  _calcFunctions.default = function(n) {
    var rgb = [0, 0, 0];
    var q = n * 4
    if (q < 0) {
      rgb = [0, 0, 255];
    } else if (0 <= q && q < 1) {
      rgb[0] = 0;
      rgb[1] = parseInt(255 * q);
      rgb[2] = 255;
    } else if (1 <= q && q < 2) {
      rgb[0] = 0;
      rgb[1] = 255;
      rgb[2] = parseInt(255 * (2 - q));
    } else if (2 <= q && q < 3) {
      rgb[0] = parseInt(255 * (q - 2));
      rgb[1] = 255;
      rgb[2] = 0;
    } else if (3 <= q && q < 4) {
      rgb[0] = 255;
      rgb[1] = parseInt(255 * (4 - q));
      rgb[2] = 0;
    } else if (4 <= q) {
      rgb = [255, 0, 0];
    } else {
      rgb = [255, 255, 255];
    }
    
    return rgb;
  };
  
})(jQuery);
