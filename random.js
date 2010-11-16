// By Olivier “Lespacedunmatin” G., under GPL 3+ licence, WTFPL, or Beer Copyright.
// Example : $('li').random().show(); $('li').random(4).show(); $('li').random({howManyElementsToReturn: 'all'}).show();
jQuery.fn.random = function(options) {
	var elements = this;
	var numberOfElements;
	var elementsToReturn = jQuery([]);
	var settings = {
		howManyElementsToReturn: 'all'
	}
	
	if(options) {
		if (typeof(options) == 'number') {
			settings.howManyElementsToReturn = options;
		} else {
			jQuery.extend(settings, options);
		}
	}

	if (settings.howManyElementsToReturn != 'all') {
		settings.howManyElementsToReturn = parseInt(settings.howManyElementsToReturn);
		// FIXME : if options == NaN or 0, settings.howManyElementsToReturn == 'all'. The next line is useless.
		if (isNaN(settings.howManyElementsToReturn) || settings.howManyElementsToReturn < 1) return null;
	}

	numberOfElements = elements.size();

	if (settings.howManyElementsToReturn >= numberOfElements || settings.howManyElementsToReturn == 'all') settings.howManyElementsToReturn = numberOfElements;

	while(settings.howManyElementsToReturn > 0 && numberOfElements > 0) {
		var rand = Math.round( Math.random() * (numberOfElements-1));
			
		elementsToReturn = elementsToReturn.add(elements.eq(rand).clone(true));
		elements = elements.not(':eq('+rand+')');
	
		numberOfElements = elements.size();
		settings.howManyElementsToReturn = settings.howManyElementsToReturn-1;
	}

	return elementsToReturn;
};
