( function ( $ ) {
	'use strict';

	var bgn_kbd = {
		id: 'bgn-kbd',
		name: 'روچ کپتین بلوچی',
		description: 'Western Baluchi Keyboard Layout',
		date: '2015-03-11',
		URL: 'http://github.com/wikimedia/jquery.ime',
		author: 'Mjbmr',
		license: 'GPLv3',
		version: '1.0',
		patterns: [
			[ '`', '\u200c' ],
			[ '1', '۱' ],
			[ '2', '۲' ],
			[ '3', '۳' ],
			[ '4', '۴' ],
			[ '5', '۵' ],
			[ '6', '۶' ],
			[ '7', '۷' ],
			[ '8', '۸' ],
			[ '9', '۹' ],
			[ '0', '۰' ],

			[ 'q', 'ض' ],
			[ 'w', 'ص' ],
			[ 'e', 'ث' ],
			[ 'r', 'ق' ],
			[ 't', 'ف' ],
			[ 'y', 'غ' ],
			[ 'u', 'ع' ],
			[ 'i', 'ه' ],
			[ 'o', 'خ' ],
			[ 'p', 'ح' ],
			[ '\\[', 'ج' ],
			[ '\\]', 'چ' ],

			[ 'a', 'ش' ],
			[ 's', 'س' ],
			[ 'd', 'ی' ],
			[ 'f', 'ب' ],
			[ 'g', 'ل' ],
			[ 'h', 'ا' ],
			[ 'j', 'ت' ],
			[ 'k', 'ن' ],
			[ 'l', 'م' ],
			[ ';', 'ک' ],
			[ '\'', 'گ' ],

			[ 'z', 'ظ' ],
			[ 'x', 'ط' ],
			[ 'c', 'ز' ],
			[ 'v', 'ر' ],
			[ 'b', 'ڈ' ],
			[ 'n', 'د' ],
			[ 'm', 'پ' ],
			[ ',', 'و' ],

			[ '~', '÷' ],
			[ '@', '٬' ],
			[ '#', '٫' ],
			[ '%', '٪' ],
			[ '\\^', '×' ],
			[ '&', '،' ],
			[ '\\(', ')' ],
			[ '\\)', '(' ],
			[ '_', 'ـ' ],

			[ 'Q', 'ْ' ],
			[ 'W', 'ٌ' ],
			[ 'E', 'ٍ' ],
			[ 'R', 'ً' ],
			[ 'T', 'ُ' ],
			[ 'Y', 'ِ' ],
			[ 'U', 'َ' ],
			[ 'I', 'ّ' ],
			[ 'O', ']' ],
			[ 'P', '[' ],
			[ '\\{', '}' ],
			[ '\\}', '{' ],

			[ 'A', 'ؤ' ],
			[ 'S', 'ئ' ],
			[ 'D', 'ي' ],
			[ 'F', 'إ' ],
			[ 'G', 'أ' ],
			[ 'H', 'آ' ],
			[ 'J', 'ٹ' ],
			[ 'K', '»' ],
			[ 'L', '«' ],
			[ '"', '؛' ],

			[ 'Z', 'ێ' ],
			[ 'X', 'ط' ],
			[ 'C', 'ژ' ],
			[ 'V', 'ڑ' ],
			[ 'B', 'ۆ' ],
			[ 'N', 'ٔ' ],
			[ 'M', 'ء' ],
			[ '<', '>' ],
			[ '>', '<' ],
			[ '\\?', '؟' ]
		]
	};

	$.ime.register( bgn_kbd );
}( jQuery ) );
