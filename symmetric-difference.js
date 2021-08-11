// Advanced javaScript Algorithims

//Symmetric Difference

// ex sum([1,2,5] , [2,3,5] , [3,4,5]) equals [1,4,5]

// function sym() {
//   var args = [];
//   for (let i = 0; i < arguments.length; i++) {
//     args.push(arguments[i]);
//   }
//   function symDiff(arr1, arr2) {
//     var result = [];
//     arr1.forEach((item) => {
//       if (arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
//         result.push(item);
//       }
//     });
//     arr2.forEach((item) => {
//       if (arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
//         result.push(item);
//       }
//     });
//     return result;
//   }

//   return args.reduce(symDiff);
// }

// function sym() {
//   var args = Array.prototype.slice.call(arguments);
//   var getDiff = (arr1, arr2) => {
//     function filterFunction(arr1, arr2) {
//       return arr1.filter((item) => {
//         return arr2.indexOf(item) === -1;
//       });
//     }
//     return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
//   };
//   var symArray = args.reduce(getDiff, []);

//   var unique = symArray.filter((elem, index, self) => {
//     return index === self.indexOf(elem);
//   });

//   return unique;
// }

function sym() {
  const diff = (a, b) => new Set([...a].filter((n) => !b.has(n)));

  const result = [...arguments]
    .map((arr) => {
      return new Set(arr);
    })
    .reduce((acc, set) => {
      return new Set([...diff(acc, set), ...diff(set, acc)]);
    });
  return [...result];
}

console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
