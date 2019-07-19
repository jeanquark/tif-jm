module.exports = function(text) {
	if (text) {
		return text
			.toString()
			.toLowerCase()
			.replace(/\s+/g, "_") // Replace spaces with -
			.replace(/[^\w\-]+/g, "") // Remove all non-word chars
			.replace(/\-/g, "_") // Replace single - with single _
			.replace(/\-\-+/g, "_") // Replace multiple - with single _
			.replace(/^-+/, "") // Trim - from start of text
			.replace(/-+$/, '') // Trim - from end of text
			.replace(/ü/, "u")
			.replace(/ä/, "a")
			.replace(/é/, "e")
			.replace(/è/, "e")
			.replace(/ö/, "o");
	}
	return
}

// exports.slugify = function(text) {
// 	if (text) {
// 		return text
// 			.toString()
// 			.toLowerCase()
// 			.replace(/\s+/g, "_") // Replace spaces with -
// 			.replace(/[^\w\-]+/g, "") // Remove all non-word chars
// 			.replace(/\-/g, "_") // Replace single - with single _
// 			.replace(/\-\-+/g, "_") // Replace multiple - with single _
// 			.replace(/^-+/, "") // Trim - from start of text
// 			.replace(/-+$/, '') // Trim - from end of text
// 			.replace(/ü/, "u")
// 			.replace(/ä/, "a")
// 			.replace(/é/, "e")
// 			.replace(/è/, "e")
// 			.replace(/ö/, "o");
// 	}
// 	return
// };


// export default function slugify (text) {
// 	if (text) {
// 		return text
// 			.toString()
// 			.toLowerCase()
// 			.replace(/\s+/g, "_") // Replace spaces with -
// 			.replace(/[^\w\-]+/g, "") // Remove all non-word chars
// 			.replace(/\-/g, "_") // Replace single - with single _
// 			.replace(/\-\-+/g, "_") // Replace multiple - with single _
// 			.replace(/^-+/, "") // Trim - from start of text
// 			.replace(/-+$/, '') // Trim - from end of text
// 			.replace(/ü/, "u")
// 			.replace(/ä/, "a")
// 			.replace(/é/, "e")
// 			.replace(/è/, "e")
// 			.replace(/ö/, "o");
// 	}
// 	return
// }


// module.exports = {
// 	slugify: function(text) {
// 		return text.toUpperCase();
// 	}
// }


// export default function slugify (text) {
// 	if (text) {
// 		return text
// 			.toString()
// 			.toLowerCase()
// 			.replace(/\s+/g, "_") // Replace spaces with -
// 			.replace(/[^\w\-]+/g, "") // Remove all non-word chars
// 			.replace(/\-/g, "_") // Replace single - with single _
// 			.replace(/\-\-+/g, "_") // Replace multiple - with single _
// 			.replace(/^-+/, "") // Trim - from start of text
// 			.replace(/-+$/, '') // Trim - from end of text
// 			.replace(/ü/, "u")
// 			.replace(/ä/, "a")
// 			.replace(/é/, "e")
// 			.replace(/è/, "e")
// 			.replace(/ö/, "o");
// 	}
// 	return
// }

// export default function(text) {
// 	if (text) {
// 		return text
// 			.toString()
// 			.toLowerCase()
// 			.replace(/\s+/g, "_") // Replace spaces with -
// 			.replace(/[^\w\-]+/g, "") // Remove all non-word chars
// 			.replace(/\-/g, "_") // Replace single - with single _
// 			.replace(/\-\-+/g, "_") // Replace multiple - with single _
// 			.replace(/^-+/, "") // Trim - from start of text
// 			.replace(/-+$/, '') // Trim - from end of text
// 			.replace(/ü/, "u")
// 			.replace(/ä/, "a")
// 			.replace(/é/, "e")
// 			.replace(/è/, "e")
// 			.replace(/ö/, "o");
// 	}
// 	return
// }

// export default function slugify(text) {
// 	if (text) {
// 		return text
// 			.toString()
// 			.toLowerCase()
// 			.replace(/\s+/g, '_')           // Replace spaces with -
// 			.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
// 			.replace(/\-/g, '_')            // Replace single - with single _
// 			.replace(/\-\-+/g, '_')         // Replace multiple - with single _
// 			.replace(/^-+/, '')             // Trim - from start of text
// 			.replace(/-+$/, '')            // Trim - from end of text
// 			.replace(/ü/, "u")
// 			.replace(/ä/, "a")
// 			.replace(/é/, "e")
// 			.replace(/è/, "e")
// 			.replace(/ö/, "o");
// 	}
// 	return
// }