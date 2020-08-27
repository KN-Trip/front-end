const compose = (...args) => (x) => args.reduce((acc, arg) => arg(acc), x);

const f = (x) => x + 3;
const g = (x) => 2 * x;
const h = (x) => x + 2;
const w = (x) => 3 * x;

let sum = compose(f, g, h, w);

console.log(sum(0));
