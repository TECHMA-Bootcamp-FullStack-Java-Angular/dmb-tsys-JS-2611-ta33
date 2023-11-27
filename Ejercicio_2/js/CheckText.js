export default class CheckText {
	#dateRegex = /\d{2}[/]\d{2}[/]\d{4}/;

	#emailRegex = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,3}$/;

	#replacements = {
		"&": "&amp;",
		'\"': "&quot;",
		"<": "&tl;",
		">": "&gt;",
	};

	#dangerousTags = ["script"];

	#isValidate(text, dataRegex) {
		return !!text.match(dataRegex);
	}

	/**
	 * Function that validates an date according to a regular expression emailRegex of the Class
	 * @param {string} text
	 * @returns an object with the parameter and a boolean
	 */
	isValidateDate(text) {
		return {
			text,
			validated: this.#isValidate(text, this.#dateRegex),
		};
	}

	/**
	 * Function that validates an email according to a regular expression emailRegex of the Class
	 * @param {text: string} text
	 * @returns an object with the parameter and a boolean
	 */
	isValidateEmail(text) {
		return {
			text,
			validated: this.#isValidate(text, this.#emailRegex),
		};
	}

	/**
	 * Function that replaces the words according to their substitute of the Diccionary replacements
	 * @param {string}
	 * @returns a srtrin with the words that matched
	 */
	replaceText(text) {
		Object.keys(this.#replacements).forEach((k) => {
			text = text.replace(k, this.#replacements[k]);
		});
		return text;
	}

	/**
	 * Function that inverts the sense of thefirst and last name and separate them by a comma
	 * @param {string} names
	 * @returns an object with the parameter and a boolean
	 */
	invertNames(names) {
		const reverseNames = names.split(" ");
		reverseNames.reverse().join(", ");
		return {
			text: names,
			validated: reverseNames.toString(),
		};
	}

	/**
	 * Function scans the HTML document removes all instances of the dangerous tags
	 */
	removeTags() {
		this.#dangerousTags.forEach((tagName) => {
			let tags = document.querySelectorAll(tagName);
			tags.forEach((tag) => tag.remove());
		});
	}
}
