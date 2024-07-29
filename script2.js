document.addEventListener('DOMContentLoaded', (event) => {
	loadComments();
});

function submitComment() {
	const comment = document.getElementById('comment').value;
	saveComment(comment);
	loadComments();
}

function saveComment(comment) {
	let comments = JSON.parse(localStorage.getItem('comments')) || [];
	comments.push(comment);
	localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
	const commentsDiv = document.getElementById('comments');
	const comments = JSON.parse(localStorage.getItem('comments')) || [];
	commentsDiv.innerHTML = '<h2>Commentaires précédents:</h2>';
	comments.forEach((comment) => {
		const commentElement = document.createElement('div');
		commentElement.innerHTML = comment;
		commentsDiv.appendChild(commentElement);
	});
}
