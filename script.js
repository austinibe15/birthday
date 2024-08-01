const commentButton = document.getElementById('submit-button'); // Adjust based on actual button ID  
const commentsDiv = document.getElementById('comments');  
const commentInput = document.getElementById('comment-input');  
const birthdayMusic = document.getElementById('birthday-music');   
const playButton = document.getElementById('play-music');   

// Comment submission logic  
commentButton.addEventListener('click', () => {  
    if (commentInput.value) {  
        const newComment = document.createElement('div');  
        newComment.classList.add('comment');  
        newComment.textContent = commentInput.value;  
        commentsDiv.appendChild(newComment);  
        commentInput.value = ''; // Clear the input  
    } else {  
        alert('Please enter a message before submitting.');  
    }  
});  

playButton.addEventListener('click', () => {  
    birthdayMusic.play();  
});  

// Volume control (optional)  
birthdayMusic.volume = 0.5; // Set initial volume (0.0 to 1.0)