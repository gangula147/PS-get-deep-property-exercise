var object = {
	person: 
	 {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName'}}}

function deepFind(object, path) {
  var paths = path.split('.'), current = object, i;

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }
  return current;
}

console.log(deepFind(object, 'person.name.lastName'))