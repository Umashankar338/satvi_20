// Balloon Pop Logic with Sound and Countdown
let poppedBalloons = 0;
const totalBalloons = document.querySelectorAll('.balloon').length;

// Add click event to each balloon
document.querySelectorAll('.balloon').forEach(balloon => {
    balloon.addEventListener('click', function() {
        // Play pop sound
        document.getElementById('pop-sound').play();
        
        // Hide balloon (simulate pop)
        this.style.visibility = 'hidden';

        // Update balloon countdown
        poppedBalloons++;
        document.getElementById('balloon-countdown').innerText = `Balloons Left: ${totalBalloons - poppedBalloons}`;
        
        // Check if all balloons are popped
        if (poppedBalloons === totalBalloons) {
            document.getElementById('final-message').style.display = 'block';
            document.getElementById('cheer-sound').play();
            document.getElementById('fireworks').style.display = 'block';
            
            // Hide fireworks after 5 seconds
            setTimeout(() => {
                document.getElementById('fireworks').style.display = 'none';
            }, 5000); // 5 seconds delay
        }
    });
});

// Function to add a birthday wish
function addWish() {
    const wishInput = document.getElementById('wish-input').value.trim();
    if (wishInput) {
        const wishDiv = document.createElement('div');
        wishDiv.innerText = wishInput;
        document.getElementById('wish-list').appendChild(wishDiv);
        document.getElementById('wish-input').value = 'send to Satvi'; // Clear input after adding wish
    }
}
