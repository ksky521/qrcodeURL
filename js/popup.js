(function(window, document, $, undefined) {

	var $qrcode = $('#qrcode');

	function render(text, option) {
		var option = option || {};
		if (typeof text === 'string') {
			option.text = text;
		} else {
			option = text;
		}

		$qrcode.html('').qrcode(option);
	}
	chrome.tabs.getSelected(function(tab){
		render(tab.url);
	})


}(window, document, jQuery));