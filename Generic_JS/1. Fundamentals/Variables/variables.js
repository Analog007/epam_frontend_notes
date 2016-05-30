/* Declaring and assigning variables are two different things. */
(function declarationAndAssignment() {
	var x;

	console.log(x); //undefined
	console.log(typeof x); //undefined x's type is unknown yet, so it'll default to undefined as well

	x = 1;
	console.log(x); // 1;
	console.log(typeof x); //Number
})();


/* JavaScript variables are 'hoisted' to the top of the function declaration, resulting in funny errors*/
var hoistedGlobal = 'hello';
(function hoisting() {
	console.log(hoistedGlobal); //undefined, see explanation below
	var hoistedGlobal = 'world';
	console.log(hoistedGlobal); //'world'
})();

/* To understand hoisting, here's the code above rewritten on how the JS engine will see it*/
/* To evade these kinds of errors, move your var declarations on top of the functions yourself */
(function hoistingExplained() {
	var hoistedGlobal; //Var declaration moved to the top of the function
	console.log(hoistedGlobal); //undefined, see explanation below
	hoistedGlobal = 'world'; //assignment will stay where it was
	console.log(hoistedGlobal); //'world'
})();

