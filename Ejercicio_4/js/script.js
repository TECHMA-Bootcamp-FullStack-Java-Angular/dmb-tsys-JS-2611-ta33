// Key [CE] -> Delete all.
const clearResult = () => updateResult("");

// Key [C] -> Delete the last operator.
const clearEntry = () => updateResult(result.textContent.match(/^[0-9+]+/));

// Key [⌫] -> Delete last character.
const backSpace = () => updateResult(result.textContent.slice(0, -1));

// Key [✓2] -> Calculate the square root.
const calculateSqrt = () =>
	updateResult(Math.sqrt(parseFloat(result.textContent)));

// Key [%] -> Calculate the percentage of the multiplied value.
const percent = () => updateResult((result.textContent / 100).toString().concat("*"));

// Key [⅟x] -> Divide 1 by the value.
const calculate1x = () => updateResult(1 / result.textContent);

// Key [-/+] -> Swap the sign.
const toggleSign = () => updateResult(-result.textContent);

// Key [=] -> Calculate for operation.
const calculate = () => updateResult(eval(result.textContent));

// Rest of keys -> Appends the given value to the `result` element's innerHTML.
const appendToResult = (value) => (result.innerHTML += value);

// Updates the `result` element's innerHTML to the given value.
const updateResult = (newValue) => (result.innerHTML = newValue);
