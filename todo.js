/* Use an array to hold the todo list. 
var todoList = [];

function rememberTo(task){
	todoList.push(task);
}

function whatIsNext() {
	// removes the first item and displays the second
	return todoList.shift();
}

function urgentlyRememberTo(task) {
	// adds task in high priority - adds to front of list, not back
	todoList.unshift(task);
}

function getListName(name) {
	this.name = name;
	return name;
}add



rememberTo('bread');
rememberTo('milk');
rememberTo('altoids');
getListName('Another List');
console.log(todoList);
console.log(whatIsNext());

urgentlyRememberTo('monster');
console.log(todoList); 
*/

/********** Adding buttons functionality to todoList app **********/
$(document).ready(function() {
	$('#addItem').click('on', addItem);
	$('#addItem').css({'font-size': '20px', 'color': 'green'});
	$('#removeItem').click('on', printList);
	$('#removeItem').css({'font-size': '20px', 'color': 'red'});
	$('#listName').click('on', changeListName);

	/* Change the name of the list */
	function changeListName() {
		var name = prompt('Enter name of list: ');
		$('#listName').replaceWith('<p id="listName">' + name + '</p>');
	}

	/* Use an array to hold the todo list */
	var todoList = [];

	function addItem() {
		var task = prompt('Enter new task: ');
		todoList.push(task);
		$('#todolist').remove();
		/* how to pass the task to the append method??? */
		$('.list').append('<p>' + task + '</p>');
	}

	function removeItem(task) {
		todoList.remove(task);
	}

	function printList() {
		console.log(todoList);
	}
});