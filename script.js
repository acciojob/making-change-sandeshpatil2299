const makeChange = (c) => {
  // your name here
	let q= parseInt(c/25);
	c= parseInt(c%25);

	let d= parseInt(c/10);
	c= parseInt(c%10);

	let n= parseInt(c/5);
	c= parseInt(c%5);

	let p= parseInt(c);

	return {q, d, n, p};
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
