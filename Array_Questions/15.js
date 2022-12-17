//15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

//y = mx+b
//m - slope = 2 the m is the slope and the b is the y-intercept.
//b = -2

function slope() {
  var x = 0;
  var y = 2 * x - 2;
  console.log(`Y Intercept is :${y}`);
  // Y Intercept = (0,-2)

  y = 0;
  x = y + 2 / 2;
  console.log(`X Interecept ${x}`);
  // X Intercept = (0,1)
}

slope();
