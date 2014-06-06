var sum_of_squares = 0;
var square_of_sum = 0;

for(var i = 1; i <= 100; i++) {
  sum_of_squares += i * i;
}

var sum = 0;

for(var i = 1; i <= 100; i++ ) {
  sum += i;
}
square_of_sum = sum * sum;

console.log(sum_of_squares - square_of_sum);
