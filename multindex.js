function match_index(stringORarray, search_value) {
var result = [], number = -1;
while ((number = stringORarray.indexOf(search_value, number+1)) >= 0) result.push(number++);
return result}
