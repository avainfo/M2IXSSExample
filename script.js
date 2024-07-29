function submitForm() {
	const username = document.getElementById('username').value;
	const outputDiv = document.getElementById('output');
	outputDiv.innerHTML = 'Bonjour, ' + username + '!';
}