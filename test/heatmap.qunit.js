var $elem = $('<div>').attr('id', 'testElemContainer').appendTo('body');

QUnit.test( "heatmapCalc(white)", function( assert ) {
  assert.deepEqual(
    $elem.heatmapCalc('white', 1.0),
    [255, 255, 255],
    "white 255, 255, 255"
  );
});

QUnit.test( "heatmapCalc(default)", function( assert ) {
  assert.deepEqual(
    $elem.heatmapCalc('default', -1/8),
    [0, 0, 255],
    "-1/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 0/8),
    [0, 0, 255],
    "0/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 1/8),
    [0, 127, 255],
    "1/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 2/8),
    [0, 255, 255],
    "2/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 3/8),
    [0, 255, 127],
    "3/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 4/8),
    [0, 255, 0],
    "4/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 5/8),
    [127, 255, 0],
    "5/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 6/8),
    [255, 255, 0],
    "6/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 7/8),
    [255, 127, 0],
    "7/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 8/8),
    [255, 0, 0],
    "8/8"
  );
  assert.deepEqual(
    $elem.heatmapCalc('default', 9/8),
    [255, 0, 0],
    "9/8"
  );
});

QUnit.test( "heatmap(n, {})", function( assert ) {
  $elem.heatmap(0.0);
  assert.deepEqual(
    $elem.css('background-color'),
    'rgb(0, 0, 255)',
    ""
  );
  $elem.heatmap(0.5);
  assert.deepEqual(
    $elem.css('background-color'),
    'rgb(0, 255, 0)',
    ""
  );
  $elem.heatmap(1.0);
  assert.deepEqual(
    $elem.css('background-color'),
    'rgb(255, 0, 0)',
    ""
  );
});

QUnit.test( "heatmap(n, {mode:xxx})", function( assert ) {
  $elem.heatmap(0.5, {'mode': 'white'});
  assert.deepEqual(
    $elem.css('background-color'),
    'rgb(255, 255, 255)',
    ""
  );
});

QUnit.test( "heatmap(n, {min:xxx, max:xxx})", function( assert ) {
  $elem.heatmap(50, {'min': 50, 'max': 100});
  assert.deepEqual(
    $elem.css('background-color'),
    'rgb(0, 0, 255)',
    ""
  );
  $elem.heatmap(75, {'min': 50, 'max': 100});
  assert.deepEqual(
    $elem.css('background-color'),
    'rgb(0, 255, 0)',
    ""
  );
  $elem.heatmap(100, {'min': 50, 'max': 100});
  assert.deepEqual(
    $elem.css('background-color'),
    'rgb(255, 0, 0)',
    ""
  );
});
