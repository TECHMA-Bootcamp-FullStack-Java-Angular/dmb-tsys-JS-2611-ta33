import CheckText from "./CheckText.js";
const ckText = new CheckText();

console.clear();

const textTest = [
	ckText.isValidateDate("Nací en Donostia el 04/05/1982"),
	ckText.isValidateDate("Nací en Donostia el 5/04/1982"),
	ckText.isValidateDate("Nací en Donostia el 05/4/198"),
	ckText.isValidateDate("Nací en Donostia el 1982/04/05"),
];

console.table(textTest);

const emailTest = [
	ckText.isValidateEmail("test@gmail.com"),
	ckText.isValidateEmail("te@gmail.com"),
	ckText.isValidateEmail("test@gm.com"),
	ckText.isValidateEmail("test@gmail.c"),
];

console.table(emailTest);

console.table(ckText.invertNames("John Smith"));

const textReplaceText = [
	"Remplazamos & por :" + ckText.replaceText("&"),
	"Remplazamos \" por :" + ckText.replaceText("\""),
	"Remplazamos < por :" + ckText.replaceText("<"),
	"Remplazamos >  por :" + ckText.replaceText(">"),
];
console.table(textReplaceText);

document.addEventListener("DOMContentLoaded", (event) => {
	ckText.removeTags();
	console.log("DOM fully loaded and parsed 👌");
});
