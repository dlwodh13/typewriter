const sentence = "hello there from lighthouse labs";

let timeAdded = 0;
let modifiedSen = sentence + "\n";

for (const char of modifiedSen) {
	setTimeout(() => {
		process.stdout.write(char);
	},timeAdded);
	timeAdded += 50;
}