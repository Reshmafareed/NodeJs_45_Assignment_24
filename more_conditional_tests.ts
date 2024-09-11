// Equality and Inequality Test 1.
console.log("Equality test with string: ", "Apple"==="Apple");
// Equality and Inequality Test 2.
console.log("Equality test with string: ",( "Apple" as string) != "Orange");

// Test using the case function
console.log("Lower case function test: ", "Hello".toLowerCase() === "hello");

// Numerical tests involving equality
console.log("Equality test with numbers: ", 26 === 26);
// Numerical tests involving inequality
console.log("Inequality test with numbers: ", (26 as number) != 35);


// greater than test
console.log("Greater then test: ", 10 > 5);
// less than test
console.log("Less then test: ", 5 < 10);

// greater than or equal to
console.log("greater than or equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to test:", 5 <= 10);

// Tests using "and" operators
console.log("And operator test:", 5===5 && 10 > 5);
// Tests using "or" operators
console.log("or operator test:", 5===5 || false);

// Test whether an item is in a array
const fruits: string[] = ['Nashpati','Banana','Amrood'];
console.log('Test "Nashpati" in the array:', fruits.includes("Nashpati"));

// Test whether an item is not in a array
console.log('Test "Apple" is not in array:', !fruits.includes("Apple"));




