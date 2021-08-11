// Advanced javaScript Algorithims

//Record Collection
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let it Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));
function updateRecords(id, prop, value) {
  //   if (prop === "tracks" && value !== "") {
  //     if (collection[id][prop]) {
  //       collection[id][prop].push(value);
  //     } else {
  //       collection[id][prop] = [value];
  //     }
  //   } else if (value !== "") {
  //     collection[id][prop] = [value];
  //   } else {
  //     delete collection[id][prop];
  //   }

  if (value === "") {
    delete collection[id][prop];
  } else if (prop !== "tracks") {
    collection[id][prop] = [value];
  } else {
    collection[id][prop].push(value);
  }
  return collection;
}
