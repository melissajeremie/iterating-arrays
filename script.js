const drSeuss = ["Cat in the Hat", "Sam I am", "Grinch","Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

for(let i = 0; i < drSeuss.length; i++){
  console.log(drSeuss[i]); //log all
 }

for(let x = 1; x <drSeuss.length; x+=2){
  console.log(drSeuss[x]); //log odd
}

for(let y = 1; y < drSeuss.length; y+=2){
  console.log(y)
  console.log(drSeuss.length[y]); // log odd index and value
}

const looneyTunesChars = ["Bugs Bunny", "Daffy Duck", "Tweety", "Sylvester", "Elmer Fudd", "Porky Pig", "Taz"];

for (let z = 0; z < looneyTunesChars.length; z ++) {
  if (z % 2 === 0) {
    console.log(looneyTunesChars[z]);
  }
};//log even numbered

for (let t = 0; t < looneyTunesChars.length && t%2 === 0; t++) {
  console.log(t)
  console.log(looneyTunesChars[3]);
} //log even-numbered and index 3

let v = 1;
do {
  console.log(looneyTunesChars[v]);
  v+=2;
} while (v < looneyTunesChars.length);
//log odd-numbered index
