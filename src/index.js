module.exports = function solveEquation(equation) {
  // your implementation
  var s=equation.split('*');
  console.log(s);
  
  var a=parseInt(s[0]);

  var b1=s[1];
  var b=b1.split('x^2');
  var x=b[1].replace(/\s/g, '');
  var y=parseInt(x);

  var c1=s[2];
  var c=c1.split('x');
  var z=c[1].replace(/\s/g, '');
  var f=parseInt(z);
  
  var c=parseInt(s[2]); 
  console.log(a)
  console.log(y)
  console.log(f)


  


 var D=y*y-4*a*f;
 var x1=Math.round((-y+Math.sqrt(D))/(2*a));
 var x2=Math.round((-y-Math.sqrt(D))/(2*a));
 var arr=[x1,x2];
 return(arr.sort(function(a,b){return a - b;}));

  }








