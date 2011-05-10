/*
 * Code is from Philipp Antoni's project http://go.infinise.com/
 * 
 * RK: I have removed the go.infinise.com API calls which removes
 *     autocomplete and suggestions as you type. At some point it
 *     might be nice to replace with something that talks to Google
 *     et al directly and not through go.infinse.com
 *
 * Translations for button text are done in two places:
 *  - src/pages/index.haml:
 *    there is a js_translations object that maps the english button
 *    text in base.js to the text in the translations
 *  - src/i18n/language.yml:
 *    look for the search: category
 */

var default_languages = {
	'EN': 'en',
	'RS': 'sr'
}

/*	GOOGLE
	----------------------------------------------------- */

eng.google = {
	pageTitle: "Google",
	logo: "google-white.png",
	places: {
		'Web'    : ["http://www.google.com/search?q=%query%&hl=%lang%", false],
		'Images' : ["http://images.google.com/images?q=%query%&hl=%lang%", false],
		'Maps'   : ["http://maps.google.com/maps?q=%query%&hl=%lang%", false],
		'News'   : ["http://news.google.com/news/search?q=%query%", false]
	},
	languages: default_languages
};


/*	WIKIPEDIA
	----------------------------------------------------- */

eng.wikipedia = {
	pageTitle: "Viki RS",
	logo: "wikipedia-white.png",
	places: {
		'Go to Article' : ["http://wiki.ubuntu-rs.org/index.php?title=Posebno:Search&search=%query%&go=Idi", false],
		'Search'        : ["http://wiki.ubuntu-rs.org/index.php?title=Posebno:Search&search=%query%&fulltext=Search", false],
	}
};


/*	Forum
	----------------------------------------------------- */

eng.youtube = {
	pageTitle: "Forum RS",
	logo: "forum.png",
	places: {
		'Pretraga' : ["http://forum.ubuntu-rs.org/search.php?action=search&keywords=%query%", false]
	}
};


/*	TWITTER
	----------------------------------------------------- */

eng.twitter = {
	pageTitle: "Twitter",
	logo: "twitter.png",
	places: {
		'Search Twitter' : ["http://twitter.com/search?q=%query%", false]
	}
};
