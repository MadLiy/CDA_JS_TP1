// Indiquer les valeurs affichées par les instructions suivantes :

// ==========================
// Niveau 1
// ==========================
console.log(5 + 3); // 8
console.log(10 - 4); // 6      
console.log(2 * 3);  // 6    
console.log(8 / 2); // 4       
console.log(9 % 4); // 1         
console.log("Hello" + " World"); // Hello world
console.log(5 == "5");      // true    
console.log(5 === "5");       // false
console.log(true && false);     // false 
console.log(true || false);    // true

// ==========================
// Niveau 2
// ==========================
let a = 5;
a += 2;
console.log(a);      // 7           

console.log(!true);    // false       
console.log(3 > 2 && 4 < 5);   // true
console.log(3 > 2 && 4 > 5);    // false 
console.log(3 > 2 || 4 > 5);   // true
console.log(false || (true && false)); // false 

// ==========================
// Niveau 3
// ==========================
console.log("5" + 3);    // "53"       
console.log("5" - 3);      // 2  
console.log("5" * "2");    // 10     
console.log("a" * 2);        // NaN
console.log(undefined == null); // true 
console.log(undefined === null); // false
console.log(0 == false);       // true 
console.log(0 === false);     // false
console.log("" || "JS");     // "JS"
console.log("JS" && "Fun");    // "Fun"
