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
