// Listening for an event ajax:success anywhere on the page and logging the results to the JS console.
$(document).on('ajax:success', function(e, data) {
	console.log('Ajax Response data:', data);
});
// The 'e' argument is the even object and data is the data from the response.
// Log the results so we can see what happens when we make an Ajax request.