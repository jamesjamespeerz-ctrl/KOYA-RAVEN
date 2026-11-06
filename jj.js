

document.addEventListener('DOMContentLoaded', () => {

    const audioBtn = document.getElementById('audioControlBtn');
    const songStatusText = document.getElementById('songStatusText');
    let isTrackPlaying = false;

    if (audioBtn && songStatusText) {
        audioBtn.addEventListener('click', () => {
            isTrackPlaying = !isTrackPlaying;

            if (isTrackPlaying) {
                audioBtn.textContent = 'Pause Track Preview';
                songStatusText.textContent = 'Playing ("My Day")';
                songStatusText.style.color = 'var(--accent-gold)';
                songStatusText.style.fontWeight = 'bold';
            } else {
                audioBtn.textContent = 'Play Track Preview';
                songStatusText.textContent = 'Stopped';
                songStatusText.style.color = 'inherit';
                songStatusText.style.fontWeight = 'normal';
            }
        });
    }

    
});