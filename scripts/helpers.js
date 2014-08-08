Ember.Handlebars.helper('x-log', function(value) {

	console.log(value);
	return '';
});

Ember.Handlebars.helper('format-date', function(value) {

	return moment(value).fromNow();
});