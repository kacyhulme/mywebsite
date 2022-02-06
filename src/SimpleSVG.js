function SimpleSVG() {
  
  return (
    <svg height="180" width="180" viewBox="0 0 90 90">
      <polygon 
      points="45,23,51.4656377752172,36.10081306187558,65.92324335849338,38.201626123751154,55.46162167924669,48.39918693812442,57.931275550434414,62.798373876248846,45,56,32.06872444956559,62.798373876248846,34.53837832075331,48.39918693812442,24.07675664150662,38.20162612375116,38.5343622247828,36.10081306187558" 
      style={{fill:'purple',stroke:'red',strokeWidth:1}} />
    </svg> 
  )
}

export default SimpleSVG;

// this function calculates the points
// https://dillieodigital.wordpress.com/2013/01/16/quick-tip-how-to-draw-a-star-with-svg-and-javascript/
// function SimpleSVG() {
  
//   function CalculateStarPoints(centerX, centerY, arms, outerRadius, innerRadius)
// {
//    var results = "";

//    var angle = Math.PI / arms;

//    for (var i = 0; i < 2 * arms; i++)
//    {
//       // Use outer or inner radius depending on what iteration we are in.
//       var r = (i & 1) == 0 ? outerRadius : innerRadius;
      
//       var currX = centerX + Math.cos(i * angle) * r;
//       var currY = centerY + Math.sin(i * angle) * r;

//       // Our first time we simply append the coordinates, subsequet times
//       // we append a ", " to distinguish each coordinate pair.
//       if (i == 0)
//       {
//          results = currX + "," + currY;
//       }
//       else
//       {
//          results += ", " + currX + "," + currY;
//       }
//    }

//    return results;
// }

// let answer = CalculateStarPoints(80,80,5,20,10);

//   return (
//     <div>{answer}</div>
//   )
// }

// export default SimpleSVG;
