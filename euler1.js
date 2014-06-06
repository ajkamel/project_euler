var num = 1000;
var sum = 0;

for( var count = 0; count < num; count++ ) {
  if ( count % 3 == 0  || count % 5 == 0 ) {
    sum += count;
  }
}

console.log(sum)
