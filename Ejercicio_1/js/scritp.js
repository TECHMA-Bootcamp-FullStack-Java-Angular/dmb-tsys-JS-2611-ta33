const scoreList = [];
const getScoreDice = () => Math.ceil(Math.random() * 6);
let rollDice = 3600;

while (rollDice) {
	const sumScore = getScoreDice() + getScoreDice();
	scoreList[sumScore] = (scoreList[sumScore] ?? 0) + 1;
	rollDice--;
}

console.clear();

scoreList.forEach((repetitions, sumScore) => {
	console.log(`🎲 ${sumScore} se repite: ${repetitions}`);
	document.write(`<div> 🎲 ${sumScore} se repite ${repetitions} veces <div>`);
});
