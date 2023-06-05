function match_index(stringORarray, search_value) {
var result = [], number = 0;

do {
number = stringORarray.indexOf(search_value, number);
result.push(number++);
}
while (number > 0);

result.pop();
return result;
}
