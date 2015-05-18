$(document).ready(function() {

	// **** Styling for the 3 divs - header, list and footer. **** //
	$('body').css({
		'width' : '550px',
		'height' : '1024px'
	});

	$('.header').css({
		'border' : 'solid 2px',
		'background-color' : '#F34F34'
	})
	
	$('.list').css({
		'border' : 'solid 2px',
		'background-color' : '#D34D34'
	})

	$('.footer').css({
		'border' : 'solid 2px',
		'background-color' : '#C34C34'
	}) 

	// **** Styling for texts in the header, list and footer divs **** //
	$('h4').css({
		'text-align' : 'center'
	});

	// **** Function Collections **** //
	function addToList () {
		var newItem = prompt('Add item to list:');
		$('h4#body').text(newItem);
	}

	// **** Buttons **** //
	function addItemButton() {
		$('#addItem').on('click', function() {
			var newItem = prompt('Add item to list:');
			$('h4#body').text(newItem);
		});
	}
});