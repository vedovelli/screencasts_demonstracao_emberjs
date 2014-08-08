App.Router.map(function() {

	this.resource('users', {path: '/usuarios'},function() {

			this.route('teste');
		}
	);
});

App.UsersRoute = Ember.Route.extend({

	model: function() {

		// jQuery AJAX - returns a PROMISE!
		return Ember.$.getJSON('http://demoember.ved/resources/beers.json');
	}
});